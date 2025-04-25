# nodejs 签名前端直传京东云 OSS

## nodejs

```ts
import AWS from 'npm:aws-sdk';
import { fail, success } from "../utils/resJson.ts";
import dayjs from "dayjs";
import { makeRandomString2 } from "../utils/fn.ts";

export const JD_OSS_AccessKeyId = Deno.env.get("JD_OSS_AccessKeyId")
export const JD_OSS_SecretAccessKey = Deno.env.get("JD_OSS_SecretAccessKey")

const bucketName = '桶名称';

const s3: any = new AWS.S3({ apiVersion: '2006-03-01' });
s3.endpoint = "https://s3.cn-south-1.jdcloud-oss.com";
s3.config.update({
  accessKeyId: JD_OSS_AccessKeyId,
  secretAccessKey: JD_OSS_SecretAccessKey,
  signatureVersion: "v4"
})

const app = new Hono().basePath('/api/oss/jd')

// 上传文件 预签名url
app.post('/upload/preUrl', async (c) => {
  const { filename } = await c.req.json();
  if (!filename) {
    fail('文件名称必传')
  }

  const res = await generatePresignedUrl(filename)
  return c.json(success('', res));

});

// 生成预签名 URL
export const generatePresignedUrl = async (filename: string) => {
  // 服务端生成文件名
  const objectKey = `baby/uploads/${dayjs().format('YYYYMMDD')}/${dayjs().format('HHmmss')}_${makeRandomString2(6)}_${filename}`

  const params = {
    Bucket: bucketName,
    Key: objectKey,
    Expires: 60, // URL有效期，单位秒，例如60秒后过期
    ContentType: 'application/octet-stream', // 支持任意文件类型  application/octet-stream
    // ContentType: 'image/png', // 支持任意文件类型  image/png
  };

  const uploadUrl = await s3.getSignedUrlPromise('putObject', params);
  console.log(uploadUrl, 'uploadUrl');
  return { objectKey, uploadUrl };
};

/**
 * 获取临时文件访问地址
 * @param objectKey 文件储存路径
 */
export async function getTempUrl(objectKey: string) {
  // const objectKey = 'baby/首页.png'; // 如 'folder/filename.jpg'
  const params = {
    Bucket: bucketName,
    Key: objectKey,
    Expires: 60 // URL有效期，单位秒
  };

  const res: any = await new Promise((resolve, reject) => {
    s3.getSignedUrl('getObject', params, (err: any, url: string) => {
      if (err) {
        resolve(fail(err.message, err));
      } else {
        resolve(success('', { url }));
      }
    });
  })

  return res;
}

/**
 * 获取文件列表
 */
export async function getObjectList() {
  const res: any = await new Promise((resolve, reject) => {
    // 列出存储桶中的所有对象
    s3.listObjectsV2({ Bucket: bucketName }, (err: any, data: any) => {
      if (err) {
        console.log(err, err.stack); // 打印错误信息
        resolve(fail(err.message, err));
      } else {
        console.log(data); // 打印对象列表，包括文件和文件夹（如果有权限）
        // data.Contents.forEach((item: any) => {
        //   console.log(item.Key); // 打印每个对象的键（即文件名或路径）
        // });
        resolve(success('', data));
      }
    })


  })

  return res;
}
```

## vue3

```vue
<template>
  <div class="page-box">
    <input type="file" @change="handleFileUpload" />
  </div>
</template>

<script setup>
import { http } from '@/utils/request';

const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  try {
    // 获取预签名 URL
    const { data: { objectKey, uploadUrl } } = await http.post('/api/oss/jd/upload/preUrl', { filename: file.name });
    console.log(objectKey, 'objectKey');

    // 直传文件到京东云 OSS
    const response = await fetch(uploadUrl, {
      method: 'PUT',
      body: file,
      headers: { 'Content-Type': file.type },
    });

    if (response.ok) {
      console.log('上传成功');
    }
  } catch (error) {
    console.error('上传失败:', error);
  }
};
</script>
```
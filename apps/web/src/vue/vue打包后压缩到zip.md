# vue 打包后压缩到 zip

使用 `archiver` 压缩 `dist` 目录为 `.zip` 压缩文件

## 安装依赖包

```sh
pnpm i archiver fs -D
```

## 编写脚本 `zip.js`

- zip.js

```js
import fs from 'fs';
import archiver from 'archiver';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import dayjs from 'dayjs';

// 先创建目录
fs.mkdirSync('dist-zips', { recursive: true })

const __filename = fileURLToPath(import.meta.url);
// 拿到当前目录信息
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname,'__dirname');


const output = fs.createWriteStream(resolve(__dirname, `dist-zips/dist-${dayjs().format('YYYYMMDD.HHmm')}.zip`));
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', function () {
  console.log(archive.pointer() + ' total bytes');
  console.log('archiver has been finalized and the output file descriptor has closed.');
});

archive.on('error', function (err) {
  throw err;
});

archive.pipe(output);

// append files from dist directory to archive
archive.directory(resolve(__dirname, 'dist'), false);

archive.finalize();

```

## 配置 `package.json`

- package.json

```json
{
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build --mode production",
    "build:zip": "vite build --mode production && node build-and-zip.js",
    "build:zip-only": "node zip.js",
  }
}
```
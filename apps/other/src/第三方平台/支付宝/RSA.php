<?php

// 公钥加密
function encrypt()
{
    // 待加密字符串
    $str = 'abcd2222';

    $public_key = file_get_contents(dirname(__FILE__) . '/rsa/public_key.pem');

    $public_key = openssl_pkey_get_public($public_key);

    // 加密
    try {
        openssl_public_encrypt($str,$encrypted, $public_key);

        // base64_encode转码后的内容通常含有特殊字符，在浏览器通过url传输时要注意base64编码是否是url安全的，所以进行url转码
        $encrypted = urlencode(base64_encode($encrypted));

        !is_resource($public_key) ?: openssl_free_key($public_key);

        return $encrypted;

    } catch (\Exception $exception) {
        return $exception->getMessage();
    }
}

// 私钥解密
function decrypt()
{
    // 公钥加密后的字符串
    $str = 'sqa304YV8l6J5LYpDqRtZBdmyxZ0uLSboKnrh11nEzVa00%2FsP1TJN3xX1lkYdk%2F7peQ8wTKVTxDLrA6SAPd0UCkF7K0VYHZNfFhRXW%2FqG2rPUdXXwttcf91OgIZ8UWm%2BFBG1owRPUIM5ELPnNQ6uvURYJjoXrnM0JxCdb0ojw4k%3D';

    $private_key = openssl_pkey_get_private(file_get_contents(dirname(__FILE__) . '/rsa/private_key.pem'));

    // 解密
    try {
        openssl_private_decrypt(base64_decode(urldecode($str)), $decrypted, $private_key);

        !is_resource($private_key) ?: openssl_free_key($private_key);

        return $decrypted;

    } catch (\Exception $exception) {
        return $exception->getMessage();
    }
}

echo encrypt();
print_r('<br>');
echo decrypt();

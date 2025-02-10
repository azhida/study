# hono 框架

[Hono 官网](https://hono.dev/)


## hono + cloudflare worker 支持的包

### bcryptjs

用于数据加密

```ts
import bcrypt from 'bcryptjs';

const saltRounds = 10; // 盐轮数，可根据需要调整

// 密码加密， bcryptjs 支持 cloudflare worker
async function passwordHash(password: string) {
  // 生成盐和散列密码
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

// 密码校验
async function passwordVerify(inputPassword: string, storedPassword: string) {
  const isValid = await bcrypt.compare(inputPassword, storedPassword);
  return isValid;
}
```
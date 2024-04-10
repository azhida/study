# pnpm 同时启动多个项目

## 初始化项目

```sh
mkdir test
cd test
pnpm init
pnpm create vite app1 --template vue-ts
pnpm create vite app2 --template vue-ts
pnpm create vite app3 --template vue-ts
```

## 相关文件

- `app1/package.json`

```json
{
  "name": "app1",
  // ...
  "scripts": {
    "dev": "vite --port 10001",
    // ...
  },
  // ...
}
```

- `app2/package.json`

```json
{
  "name": "app2",
  // ...
  "scripts": {
    "dev": "vite --port 10002",
    // ...
  },
  // ...
}
```

- `app3/package.json`

```json
{
  "name": "app3",
  // ...
  "scripts": {
    "dev": "vite --port 10003",
    // ...
  },
  // ...
}
```

- `package.json`

```json
{
  "name": "test",
  // ...
  "scripts": {
    "start:dev": "pnpm --stream -r run dev"
  },
  // ...
}
```
- `pnpm-workspace.yaml`

```yaml
packages:
  - 'app1'
  - 'app2'
  - 'app3'
```

执行命令

```sh
pnpm start:dev
```

就会把 `app1` 、 `app2` 、 `app3` 在同一个窗口同时启动。

访问： http://localhost:10001
访问： http://localhost:10002
访问： http://localhost:10003
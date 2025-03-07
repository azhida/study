# 使用 air 热重载

## 安装

```sh
go install github.com/air-verse/air@latest
```

## 配置 air

```sh
air init

mkdir -p ./air.config
# win 用 copy ，linux 用 cp
cp .air.toml ./air.config/.air.demo.toml
cp .air.toml ./air.config/.air.user.toml
```

- ./air.config/.air.demo.toml

```toml
# 根目录下执行，便于监听 utils 和 models 文件夹的文件变动
# 注意：air 无法监听 执行目录之外的文件变动
root = "."
testdata_dir = "testdata"
tmp_dir = "tmp"

[build]
  # 指定配置文件
  args_bin = ["-f", "tmp/demo/etc/demo-api.yaml"]
  # 指定程序位置
  bin = "tmp\\demo\\main.exe"
  # 编译打包
  cmd = "go build -o ./tmp/demo/main.exe ./api/demo/demo.go && cp -r ./api/demo/etc ./tmp/demo"
  delay = 1000
  exclude_dir = ["assets", "tmp", "vendor", "testdata"]
  exclude_file = []
  exclude_regex = ["_test.go"]
  exclude_unchanged = false
  follow_symlink = false
  full_bin = ""
  include_dir = []
  include_ext = ["go", "tpl", "tmpl", "html"]
  include_file = []
  kill_delay = "0s"
  log = "build-errors.log"
  poll = false
  poll_interval = 0
  post_cmd = []
  pre_cmd = []
  rerun = false
  rerun_delay = 500
  send_interrupt = false
  stop_on_error = false

[color]
  app = ""
  build = "yellow"
  main = "magenta"
  runner = "green"
  watcher = "cyan"

[log]
  main_only = false
  silent = false
  time = false

[misc]
  clean_on_exit = false

[proxy]
  app_port = 0
  enabled = false
  proxy_port = 0

[screen]
  clear_on_rebuild = false
  keep_scroll = true

```


## 运行

根目录执行：

```sh
air -c ./air.config/.air.demo.toml
air -c ./air.config/.air.user.toml
```
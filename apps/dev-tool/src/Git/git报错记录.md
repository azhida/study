# git 报错记录

- `fatal: refusing to merge unrelated histories`

解决：在你操作命令后面加 `--allow-unrelated-histories`

```sh
git merge master --allow-unrelated-histories
#
git pull origin master --allow-unrelated-histories
#
git pull --allow-unrelated-histories
```
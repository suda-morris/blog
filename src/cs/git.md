# Git 基础

## 演示文稿

[Git 工作流介绍](https://suda-morris.github.io/git_workflow_lecture/)

## 视频演示

[Git 工作流介绍](https://www.bilibili.com/video/BV1zv411i7ce/)

## .gitconfig 文件模板

```bash
[user]
    name = suda-morris
    email = 362953310@qq.com
[branch]
    autosetuprebase = always

[core]
    editor = vim
    quotepath = false
    autocrlf = false
    pager = less -+$LESS -FRX

[color]
    status = auto
    branch = auto
    diff = auto
    ui = true
    pager = true

[color "branch"]
    current = green reverse
    local = white
    remote = red

[color "diff"]
    meta = yellow bold
    frag = magenta bold
    old = red bold
    new = green bold

[color "status"]
    added = yellow
    changed = red
    untracked = cyan

[diff]
    tool = git_diff_wrapper

[difftool "git_diff_wrapper"]
    cmd = vimdiff -n   +2  $LOCAL $REMOTE

[pager]
    diff =

[difftool]
    prompt = no

[alias]
    glf  = log -n 10 --name-only --format=\"%Cgreen%h %Cred[%ci] %Creset<%an> %Creset %Cgreen%s %Creset \"
    gl  = log -n 30 --date-order --format=\"%Cgreen%h %Cred[%ci] %Creset <%an>%C(yellow)%d%Creset %Creset %Cgreen%s %Creset \"
    gll  = log -n 30  --format=\"%Cgreen%H %Cred[%ci] %Creset<%an> %Creset %Cgreen%s %Creset \"
    gl3 = log -n 20  --format=\"%Cgreen%h %Cred[%ci] %Creset<%an> %Creset %Cgreen%s %Creset \" --graph
    gl2 = log --format=\"%Cgreen%h %Cred[%ci] %Creset<%an> %Creset %Cgreen%s %Creset \"
    glc = log --format=\"%Cgreen%h %Cred[%cd] %Creset<committer:%cn> : %Cred[%ad] %Creset<author:%cn> %Creset \"
    glc2 = log --format=\"%Cgreen%h %Cred[%ci] %Creset<committer:%cn> : %Cred[%ai] %Creset<author:%cn> %Creset \"
    glc3 = log --format=\"%Cgreen%h %Cred[%ci] %Creset<committer:%cn> : %Cred[%ai] %Creset<author:%cn> %n %Cgreen%s %Creset \"
    glt = log --format=\"%Cgreen%h :: %ad :: %aD :: %ar :: %at :: %ai %Creset \"
    glw = log  -n 20  --format=\"%Cgreen%h %Cred[%ci] %Creset<%an> %Creset %n%Cgreen%s%Creset%n%b  \"
    gldetail = log --format=\"%h `[%cd] `<committer:%cn> `[%ad] `<author:%an> ` %s \"
    hist = log --pretty=format:\"%C(yellow)%h %C(red)%d %C(reset)%s %C(green)[%an] %C(blue)%ad\" --topo-order --graph
    latest = for-each-ref --sort=-committerdate --format=\"%(committername)@%(refname:short) [%(committerdate:short)] %(contents)\"
    st = status -uno -s
    st2 = status -s
    co = checkout
    bl = blame --date=short
    ci = commit
    dt = difftool
    dif = diff --word-diff
    di = diff --no-ext-diff

[log]
    date = short

[commit]
    template = /home/morris/.gitmessage
```

## .gitmessage 文件模板

```
vfs/fatfs: fix stat call failing when called for mount point

FATFS does not support f_stat call for drive root. When handling stat
for drive root, don't call f_stat and just return struct st with S_IFDIR
flag set.

Closes https://github.com/espressif/esp-idf/issues/xxx
```

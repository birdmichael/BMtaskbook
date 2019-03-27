'use strict';

module.exports = `
  BMTaskBook:

  Usage
    $ bmtb [<options> ...]

    Options
        none             显示板块视图
      --task, -t         创建任务
      --note, -n         创建笔记
      --timeline, -i     显示时间线视图
      --delete, -d       删除条目
      --check, -c        选中/取消选中任务
      --star, -s         Star/unstar 条目
      --list, -l         按属性列出条目
      --find, -f         搜索条目
      --edit, -e         编辑条目描述
      --move, -m         在板块之间移动条目
      --priority, -p     更新任务的优先级
      --archive, -a      显示已归档的条目
      --restore, -r      从存档还原条目
      --help, -h         显示帮助信息
      --version, -v      显示已安装的版本

    Examples
      $ bmtb
      $ bmtb --archive
      $ bmtb --begin 2 3
      $ bmtb --check 1 2
      $ bmtb --clear
      $ bmtb --copy 1 2 3
      $ bmtb --delete 4
      $ bmtb --edit @3 Merge PR #42
      $ bmtb --find documentation
      $ bmtb --list pending coding
      $ bmtb --move @1 cooking
      $ bmtb --note @coding Mergesort worse-case O(nlogn)
      $ bmtb --priority @3 2
      $ bmtb --restore 4
      $ bmtb --star 2
      $ bmtb --task @coding @reviews Review PR #42
      $ bmtb --task @coding Improve documentation
      $ bmtb --task Make some buttercream
      $ bmtb --timeline
`;

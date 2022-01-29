# pronunciation

功能：当添加"单词"标签后，右上角会出现一个读音的图标，在加载该条目和点击该图标的时候会调用有道词典，对标题发音

ViewToolbarButton.tid: 主要用于展示在toolbar按钮（个人理解），属于核心文件之一

icon-caption.tid：图标的标题，可以没有。

icon.tid：SVG格式的图标

plugin.info：插件的核心文件之一，插件的信息

pronunciation-button.js：ViewToolbarButton直接调用的js脚本。核心文件之一

pronunciation-button.js.meta：TiddlyWiki特有的文件，主要针对上面js文件的标记，没有它TiddlyWiki不会导入上面的js文件，也可以直接写入js文件中

style.css：主要用于隐藏图标的标题

style.css.meta：作用同上

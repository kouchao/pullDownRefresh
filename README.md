下拉刷新
============

初始化刷新
-----------

```javascript
	initPullDownRefresh(option,fn)
```

option

```javascript
	{
		maxHeight:100,//默认高度 支持html
		startPrompt:'下拉刷新',//提示文字 支持html
		overPrompt：'松手刷新'，//到底后提示文字 支持html
		endPrompt：'加载中'//松手后的提示文字 支持html
	}
```

fn
```javascript
	function(){
	}
```
	
开始刷新
-----------
```javascript
	statrPullDownRefresh(fn)
```

fn
```javascript
	function(){
	}
```
	
停止刷新
-----------
```javascript
	initPullDownRefresh()
```

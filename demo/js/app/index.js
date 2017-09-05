define(['pullDownRefresh'], function($) {
	$.initPullDownRefresh({},function(){
		setTimeout($.stopPullDownRefresh,1000)
	})
});
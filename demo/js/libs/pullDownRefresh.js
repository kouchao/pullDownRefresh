(function(factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define('pullDownRefresh', [], factory);
	} else {
		// Browser globals.
		factory();
	}
})(function() {

	var moveY = 0;
	var startY = 0;

	var pullDownRefresh = document.querySelector('#pullDownRefresh');
	var prompt = document.querySelector('#prompt');

	function move() {
		if (moveY >= 0) {
			pullDownRefresh.style.transition = ' all 0s';
			pullDownRefresh.style.transform = 'translate(0px,' + moveY + 'px)';
			if (moveY >= maxHeight) {
				prompt.innerHTML = overPrompt;
			} else {
				prompt.innerHTML = startPrompt;
			}
		}
	}

	function stopPullDownRefresh() {
		scrollTop = 0;
		pullDownRefresh.style.transition = ' all .5s';
		pullDownRefresh.style.transform = 'translate(0px,0px)';
	}

	function statrPullDownRefresh(fn) {
		pullDownRefresh.style.transition = ' all .5s';
		pullDownRefresh.style.transform = 'translate(0px,' + maxHeight + 'px)';
		prompt.innerHTML = endPrompt;
		cab = fn || cab;
		cab();
	}

	function initPullDownRefresh(option, fn) {
		if (typeof option == 'object') {
			maxHeight = option.maxHeight || 50;
			startPrompt = option.startPrompt || '下拉刷新';
			overPrompt = option.overPrompt || '松手刷新';
			endPrompt = option.endPrompt || '加载中';
		}

		prompt.style.height = maxHeight + 'px';
		prompt.style.lineHeight = maxHeight + 'px';


		pullDownRefresh.addEventListener('touchstart', function(e) {

			if (e.touches.length <= 1) {
				startY = e.touches[0].pageY;
			}


		})

		pullDownRefresh.addEventListener('touchmove', function(e) {
			var scrollTop = document.documentElement.scrollTop;

			if (e.touches.length <= 1) {
				moveY = e.touches[0].pageY - startY;
				if (moveY >= maxHeight && moveY > 0) {
					moveY = maxHeight;
				}
				move(scrollTop);

			}

		})

		pullDownRefresh.addEventListener('touchend', function() {
			if (moveY >= maxHeight) {
				statrPullDownRefresh(fn);
			} else {
				stopPullDownRefresh();
			}

		})

		pullDownRefresh.addEventListener('touchcancel', function() {
			if (moveY >= maxHeight) {
				statrPullDownRefresh(fn);
			} else {
				stopPullDownRefresh();
			}

		})
	}



	if (typeof window !== 'undefined') {
		window.pullDownRefresh = {
			stopPullDownRefresh: stopPullDownRefresh,
			statrPullDownRefresh: statrPullDownRefresh,
			initPullDownRefresh: initPullDownRefresh
		}
	}

	return {
		stopPullDownRefresh: stopPullDownRefresh,
		statrPullDownRefresh: statrPullDownRefresh,
		initPullDownRefresh: initPullDownRefresh
	}

})
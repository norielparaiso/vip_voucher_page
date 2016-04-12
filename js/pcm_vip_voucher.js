var PCM = PCM || {};

PCM.vipVoucherScript = function() {
	var uiFix = function(){
		$('.vip-page-container img').attr('draggable','false');
	};

	var _init = function(){
		uiFix();
	};

	return {
		init: _init
	};
}

$(function() {
	$(document).ready(function(){
		PCM.vipVoucherScript().init();
	});
});
;(function($){
	var sidebar=$("#sidebar"),
		mask=$(".mask"),
		sidebar_trigger=$("#sidebar_trigger"),
		backBtn=$(".backtoTop");

	sidebar_trigger.on('click',function(){
		mask.fadeIn();
		sidebar.css('transform','translate(0,0)');
	});
	mask.on('click',function(){
		mask.fadeOut();
		//这里避免写具体数据
		sidebar.css('transform','translate('+sidebar.width()+'px,0');
	});	
	backBtn.on('click',function(){
		$('html, body').animate({
			scrollTop:0
		},800)
	});
	$(window).on('scroll',function(){
		if($(window).scrollTop()==0)
			backBtn.fadeOut();
		else
			backBtn.fadeIn();
	});
	//页面加载后触发trigger事件
	$(window).trigger('scroll');

})(jQuery);
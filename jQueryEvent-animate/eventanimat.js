$(function(){
	$("#panel h5.head").bind("click",function(){
	var $content=$(this).next();
	if($content.is(":visible")){
		$content.hide();
	}else{
		$content.show();
	}
});
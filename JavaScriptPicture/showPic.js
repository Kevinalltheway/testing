function showPic(whichpic){
	if(!document.getElementById("placeholder")) return false;
	var source= whichpic.getAttribute("href");
	var placeholder= document.getElementById("placeholder");
	if(placeholder.nodeName !="IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
		var text= whichpic.getAttribute("title")? whichpic.getAttribute("title") : "";
		var description= document.getElementById("description");
		if(description.firstChild.nodeType === 3){
			description.firstChild.nodeValue= text;
		}		
	}
	return true;
}

function prepareGallery(){
	//检查浏览器是否理解方法
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	//保存
	var gallery= document.getElementById("imagegallery");
	var links= gallery.getElementsByTagName("a");
	//添加事件
	for(var i=0;i<links.length;i++){
		links[i].onclick=function(){
			return showPic(this)? false:true;
		}
	}
}
addLoadEvent(prepareGallery);
/*
function reBack(whichPic){

	var placeholder=document.getElementById("placeholder");
	var imga=document.getElementsByClassName("imga");
	imga.onclick=function(){
		placeholder.setAttribute("src","../images/placeholder.gif");
	}
}
addLoadEvent(reBack);
*/
function insertAfter(newElement,targetElement){
	var parent=targetElement.parentNode;
	if(parent.lastChild===targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function countBodyChildren(){
	var body_ele= document.getElementsByTagName("body")[0];
	alert(body_ele.childNodes.length);
}
addLoadEvent(countBodyChildren);
//加括号显示为8，不加显示为9，为何？

//共享onload事件的方法
function addLoadEvent(func){
	var oldonload= window.onload;
	if(typeof window.onload != "function"){
		window.onload=func;
	}// 已经绑定了一些函数的话，重新绑定的方式添加新的
	else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}

function preparePlaceholder(){
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var placeholder=document.createElement("img");
	placeholder.setAttribute("id","placeholder");
	placeholder.setAttribute("src","../images/placeholder.gif");
	placeholder.setAttribute("alt","my image gallery");
	var description=document.createElement("p");
	description.setAttribute("id","description");
	var desctext=document.createTextNode("choose an image.");
	description.appendChild(desctext);
	var gallery=document.getElementById("imagegallery");
	insertAfter(placeholder,gallery);
	insertAfter(description,placeholder);
}
addLoadEvent(preparePlaceholder);

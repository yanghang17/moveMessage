/*
1.找到所有id=message的标签
2.给所有id=message的标签设置setAttribute("属性"，value);
3.addLoadEvent函数
*/
addLoadEvent(displaymessage);
function displaymessage() {
	if (!document.getElementsByTagName) {return false};
	if (!document.getElementById("message")) {return false};
	var elem = document.getElementById("message");
	//绝对定位位置以body来做对象，设置目标message原始位置
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	movemessage("message",800,100,10);
	//分开调用，可以取一样的名字，设置messages原始位置
	if (!document.getElementById("messages")) {return false};
	var elem = document.getElementById("messages");
	elem.style.position = "absolute";
	elem.style.left = "50px";
	elem.style.top = "100px";
	//用这个去调用movemessage函数，不要addLoadEvent函数。可以声明一个全局变量，利于后期
	movement=movemessage("messages",400,450,10);
}

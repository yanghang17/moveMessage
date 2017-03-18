//在displaymessage函数里会有参数传进来调用这个函数，动画效果才会实现
/*
function movemessage() {
	if (!document.getElementById) {return false};
	if (!document.getElementById("message")) {return false};
	//给这个out赋值，只是为了之后方便取消她clearTimeout(变量名)
	var elem = document.getElementById("message");
	elem.style.left = "500px";
	console.log(elem)                            ;
}
8/
/*
1.获取id的value,获取leftx，topy的初始位置值，并用变量接住。
2.先给结束的判断值，如果等于结果位置值，就return false
3.开始if小于目标值，初始值++
4.
*/

function movemessage(elementid,left_x,top_y,times) {
	if (!document.getElementById) {return false};
	var elem = document.getElementById(elementid);
	//console.log(elem);
	var leftx = parseInt(elem.style.left);
	//console.log()
	var topy = parseInt(elem.style.top);
	if (leftx == left_x && topy == top_y) {return true};
	if (leftx < left_x) {leftx++};
	//if (leftx > left_x) {leftx--};
	if (topy < top_y) {topy++};
	//if (topy > top_y) {topy--};
	elem.style.left = leftx + "px";
	elem.style.top = topy + "px";
	//console.log('"+elementid+"',"+left_x+","+top_y+","+times+")
	//引号的使用可以看末尾
	var repeat = "movemessage('"+elementid+"',"+left_x+","+top_y+","+times+")";
	//console.log(repeat);
	//赋值的movement是可以取消的，只是为了后续的可以简单操作这个动画
	movement = setTimeout(repeat,times);
	var s=1;
	var t=2;
	var y="yu";
	console.log("+s+","+y+","+t+");//+s+ +y+ +t+
	console.log(s,y,t);//1 "yu" 2
	console.log("s","y","t");//s y t
	console.log("("+s+","+y+","+t+")");//(1,yu,2)
}

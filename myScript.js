var res=0;
var num = "0";
var disp = "";

var arr = [];
var stack = []; 
var rec = "";
/*
function check(x){
	rec = x;
	disp = disp + x;
	try{
		if ("0123456789".search(x+"")!=-1)
		{
			num = num + x;
		}
		else{
			throw "err";
		}
	}
	catch(err){
		var n = Number(num);
		num = "0";
		arr.push(n);
		if (x=='+' || x=='-')
		{
			console.log(x+" "+(x=='+'));
			if (stack.length==0)
			{
				stack.push(x);
			}
			else{
				while(stack.length!=0)
				{
					arr.push(stack.pop());
				}
				stack.push(x);
			}
		}
		else{
			console.log(x+" "+(x=='*'));
			if (stack.length==0)
			{
				stack.push(x);
			}
			else{ 
				var top = stack.pop();
				while(stack.length!=0 && (top=="*" || top=="/"))
				{
					arr.push(top);
					if (stack.length!=0)
					{
						top = stack.pop();
					}
				}
				if (top=='+' || top=='-')
					{stack.push(top);}
				stack.push(x);
			}
		}
	}
	document.getElementById("panel").innerHTML=disp;
}

function check2(x){
	try{
		console.log(arr);
		console.log(stack);
		arr.push(Number(num));
		while(stack.length!=0)
		{
			arr.push(stack.pop());
		}
		console.log(arr);
		var l=arr.length;
		var i=1;
		var top="";
		var trace = [arr.shift()]
		while (arr.length!=0)
		{
			top=arr.shift();
			if (top=='+')
			{
				res = (Number(trace.pop()) + Number(trace.pop()));
				arr.unshift(res);
				i=i-2;
			}
			else if (top=='-')
			{
				res = -(Number(trace.pop()) -Number(trace.pop()));
				arr.unshift(res);
				i=i-2;
			}
			else if (top=='*')
			{
				res = (Number(trace.pop()) * Number(trace.pop()));
				arr.unshift(res);
				i=i-2;
			}
			else if (top=="/"){
				var a = Number(trace.pop());
				res = (Number(trace.pop())/a);
				arr.unshift(res);
				i=i-2;
			}
			else{
				trace.push(top);
			}
		}
		document.getElementById("panel").innerHTML = trace.pop();
	}
	catch(err)
	{
		document.getElementById("panel").innerHTML = "ERROR..!";
	}
	res=0;
	disp="";
	arr=[];
	num="";
	stack=[];
}
function cln(){
	if ("0123456789".search(rec+"")!=-1)
	{
		num = num.slice(0,num.length-1);
	}
	else{
		stack.pop();
	}
	disp = disp.slice(0,disp.length-1);
	document.getElementById("panel").innerHTML = disp;
}
*/
function check(x){
	disp = disp + x;
	//rec = x;
	document.getElementById("panel").innerHTML = disp;
}

function cln(){
	disp = disp.slice(0,disp.length-1);
	document.getElementById("panel").innerHTML = disp;
}

function check2(x){
	for(var i=0;i<disp.length;i++){
		check1(disp[i]);
	}
	try{
		console.log(arr);
		console.log(stack);
		arr.push(Number(num));
		while(stack.length!=0)
		{
			arr.push(stack.pop());
		}
		console.log(arr);
		var l=arr.length;
		var i=1;
		var top="";
		var trace = [arr.shift()]
		while (arr.length!=0)
		{
			top=arr.shift();
			if (top=='+')
			{
				res = (Number(trace.pop()) + Number(trace.pop()));
				arr.unshift(res);
				i=i-2;
			}
			else if (top=='-')
			{
				res = -(Number(trace.pop()) -Number(trace.pop()));
				arr.unshift(res);
				i=i-2;
			}
			else if (top=='*')
			{
				res = (Number(trace.pop()) * Number(trace.pop()));
				arr.unshift(res);
				i=i-2;
			}
			else if (top=="/"){
				var a = Number(trace.pop());
				res = (Number(trace.pop())/a);
				arr.unshift(res);
				i=i-2;
			}
			else{
				trace.push(top);
			}
		}
		document.getElementById("panel").innerHTML = trace.pop();
	}
	catch(err)
	{
		document.getElementById("panel").innerHTML = "ERROR..!";
	}
	res=0;
	disp="";
	arr=[];
	num="";
	stack=[];
}

function check1(x){
	//rec = x;
	//disp = disp + x;
	try{
		if ("0123456789".search(x+"")!=-1)
		{
			num = num + x;
		}
		else{
			throw "err";
		}
	}
	catch(err){
		var n = Number(num);
		num = "0";
		arr.push(n);
		if (x=='+' || x=='-')
		{
			console.log(x+" "+(x=='+'));
			if (stack.length==0)
			{
				stack.push(x);
			}
			else{
				while(stack.length!=0)
				{
					arr.push(stack.pop());
				}
				stack.push(x);
			}
		}
		else{
			console.log(x+" "+(x=='*'));
			if (stack.length==0)
			{
				stack.push(x);
			}
			else{ 
				var top = stack.pop();
				while(stack.length!=0 && (top=="*" || top=="/"))
				{
					arr.push(top);
					if (stack.length!=0)
					{
						top = stack.pop();
					}
				}
				if (top=='+' || top=='-')
					{stack.push(top);}
				stack.push(x);
			}
		}
	}
	//document.getElementById("panel").innerHTML=disp;
}
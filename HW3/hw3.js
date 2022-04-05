var text = document.getElementById("text");
var start = document.getElementById("start");
var end = document.getElementById("end");
var topic = document.getElementById("topic");
var test = document.getElementById("test");

var count = false;
let str = '';
let str2;
let inputValue;

text.addEventListener('keydown',game);
start.addEventListener('click',title1);
end.addEventListener('click',title2);

function game()
{
	if(count==true)
	{
		inputValue = document.getElementById("text").value; 
		document.getElementById("輸入").innerText=inputValue;
		if(str[str.length-1]==inputValue[inputValue.length-1])
		{
			str = str.substring(0, str.length-1);
		}
	}
	setTimeout(game, 10);
}
function title1()
{
	count=true;
	setInterval(randomString,1000);
	
}
function title2()
{
	count=false;
}
function randomString()
{
	if(count==true)
	{
		str = String.fromCharCode(Math.floor(Math.random()*26+65)) + str;	
		document.getElementById("topic").innerText=str;
	}
}

document.addEventListener('keydown',logKey);
var text = document.getElementById("text");
var inputValue;
function logKey()
{
    inputValue = document.getElementById("text").value; 
	document.getElementById("輸入").innerText=inputValue;
    setTimeout(logKey, 10);
}
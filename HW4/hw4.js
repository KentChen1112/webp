let char = [];
let i;
let randomIndex;
let charNum1 = [];
let charNum2 = [];
let charNum3 = [];
let charNum4 = [];
let charNum5 = [];
let charNum6 = [];
let currentValue;
let str1 ='';
let str2 ='';
let str3 ='';
let str4 ='';
let str5 ='';
let str6 ='';
var j=0;
var k=1;

char[0]="A.png";
char[1]="B.png";
char[2]="C.png";
char[3]="D.png";
char[4]="E.png";
char[5]="F.jpg";
char[6]="G.png";
char[7]="H.png";
char[8]="I.jpg";
char[9]="J.png";
char[10]="K.png";
char[11]="L.png";
char[12]="M.png";
char[13]="N.jpg";
char[14]="O.png";
char[15]="P.png";
char[16]="Q.jpg";
char[17]="R.png";
char[18]="S.png";
char[19]="T.png";
char[20]="U.png";
char[21]="V.jpg";
char[22]="W.png";
char[23]="X.png";
char[24]="Y.png";
char[25]="Z.png";

$("#start").click(start);

function start() {
    setInterval(add,1000); 
}

function move()
{
  $("#word"+g).animate({
      left:'960px'
  },9000,'linear',animationcomplete)
  g++;
}
function animationcomplete()
{
  $("*").empty();
  alert("GAME OVER");
}
function add() {
        //clearInterval(add);
        i = Math.round( Math.random() * 5 ) + 1;
        randomIndex= Math.round( Math.random() * 25 );
        if(i==1)
        {
            j++;
            charNum1.push(randomIndex);
            str1=String.fromCharCode(randomIndex+65)+str1;
            $("#topic1").prepend("<div id='word" + j +"' style='position:absolute;'><img src='"+char[randomIndex]+"' width='30'></div>");
            $("#word"+j).animate({
                left:'960px'
            },9000,'linear',animationcomplete)
        }
        else if(i==2)
        {
            j++;
            charNum2.push(randomIndex);
            str2=String.fromCharCode(randomIndex+65)+str2;
            $("#topic2").prepend("<div id='word" + j +"' style='position:absolute;'><img src='"+char[randomIndex]+"' width='30'></div>");
            $("#word"+j).animate({
                left:'960px'
            },9000,'linear',animationcomplete)
        }
        else if(i==3)
        {
            j++;
            charNum3.push(randomIndex);
            str3=String.fromCharCode(randomIndex+65)+str3;
            $("#topic3").prepend("<div id='word" + j +"' style='position:absolute;'><img src='"+char[randomIndex]+"' width='30'></div>");
            $("#word"+j).animate({
                left:'960px'
            },9000,'linear',animationcomplete)
        }
        else if(i==4)
        {
            j++;
            charNum4.push(randomIndex);
            str4=String.fromCharCode(randomIndex+65)+str4;
            $("#topic4").prepend("<div id='word" + j +"' style='position:absolute;'><img src='"+char[randomIndex]+"' width='30'></div>");
            $("#word"+j).animate({
                left:'960px'
            },9000,'linear',animationcomplete)
        }
        else if(i==5)
        {
            j++;
            charNum5.push(randomIndex);
            str5=String.fromCharCode(randomIndex+65)+str5;
            $("#topic5").prepend("<div id='word" + j +"' style='position:absolute;'><img src='"+char[randomIndex]+"' width='30'></div>");
            $("#word"+j).animate({
                left:'960px'
            },9000,'linear',animationcomplete)
        }
        else
        {
            j++;
            charNum6.push(randomIndex);
            str6=String.fromCharCode(randomIndex+65)+str6;
            $("#topic6").prepend("<div id='word" + j +"' style='position:absolute;'><img src='"+char[randomIndex]+"' width='30'></div>");
            $("#word"+j).animate({
                left:'960px'
            },9000,'linear',animationcomplete)
        }
}

$("#text").keydown(function input()
{
    currentValue = $("#text").val();
    if(str1[str1.length-1]==currentValue[currentValue.length-1])
    {
        $("#word"+k).stop();
        $("#word"+k).remove();
        k++;
        str1 = str1.substring(0, str1.length-1);
    }
    else if(str2[str2.length-1]==currentValue[currentValue.length-1])
    {
        $("#word"+k).stop();
        $("#word"+k).remove();
        k++;
        str2 = str2.substring(0, str2.length-1);
    }
    else if(str3[str3.length-1]==currentValue[currentValue.length-1])
    {
        $("#word"+k).stop();
        $("#word"+k).remove();
        k++;
        str3 = str3.substring(0, str3.length-1);
    }
    else if(str4[str4.length-1]==currentValue[currentValue.length-1])
    {
        $("#word"+k).stop();
        $("#word"+k).remove();
        k++;
        str4 = str4.substring(0, str4.length-1);
    }
    else if(str5[str5.length-1]==currentValue[currentValue.length-1])
    {
        $("#word"+k).stop();
        $("#word"+k).remove();
        k++;
        str5 = str5.substring(0, str5.length-1);
    }
    else if(str6[str6.length-1]==currentValue[currentValue.length-1])
    {
        $("#word"+k).stop();
        $("#word"+k).remove();
        k++;
        str6 = str6.substring(0, str6.length-1);
    }
} )


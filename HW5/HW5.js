$(function (){
    $.ajax({
        type: 'GET',
        url: 'https://ptx.transportdata.tw/MOTC/v2/Rail/Metro/S2STravelTime/TYMC?%24top=30&%24format=JSON' , //欲呼叫之API網址(此範例為台鐵車站資料)
        dataType: 'json',
        headers: GetAuthorizationHeader(),
        success: function (Data) {
           var json=JSON.stringify(Data);
           console.log(json);
           
           $('#s1').text(Data[0].TravelTimes[0].FromStationName.Zh_tw);
           for(var i=2;i<=21;i++)
           {
                $('#s'+i).text(Data[0].TravelTimes[i-2].ToStationName.Zh_tw);
           }
           var count = 0;
           for(var i=1;i<=20;i++)
           {
                $('#t'+i).text(Data[0].TravelTimes[count].RunTime/60);
                count=count+21-i;
                $('#t'+i).prepend('↓');
                $('#t'+i).append('分鐘');
                var second = Data[0].TravelTimes[count].RunTime%60;
                if(second!=0)
                {
                    $('#t'+i).append(second);
                    $('#t'+i).append('秒');
                }
           }
        }
    });
});

function GetAuthorizationHeader() {
    var AppID = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';
    var AppKey = 'FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF';

    var GMTString = new Date().toGMTString();
    var ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    var HMAC = ShaObj.getHMAC('B64');
    var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

    return { 'Authorization': Authorization, 'X-Date': GMTString /*,'Accept-Encoding': 'gzip'*/}; //如果要將js運行在伺服器，可額外加入 'Accept-Encoding': 'gzip'，要求壓縮以減少網路傳輸資料量
}
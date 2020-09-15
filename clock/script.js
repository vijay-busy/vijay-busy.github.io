function startTime(){
    var today=new Date();

    var hr=today.getHours();
    var min=today.getMinutes();
    var sec=today.getSeconds();
    var amPm;
    
    if(hr>=00 && hr<=12){
        amPm='AM';
    }
    else{
        amPm='PM';
    }

    hr=checkAmPm(hr);
    hr=checkTime(hr);
    if(hr==00){
        hr=12;
    }
    min=checkTime(min);
    sec=checkTime(sec);

    document.getElementById('clock').innerHTML=hr+":"+min+":"+sec+" "+amPm;
    var t=setTimeout(startTime,500);
}
function checkAmPm(x){
    if(x>12){
        x-=12;
    };
    return x;
}
function checkTime(y){
    if(y<10){
        y="0"+y;
    }
        return y;
}
var t;
var mins;
var secs;
var msecs;

function start(){//dont ask me why i use "lmt".Do you want to know why i use this.
                //remove all statements in start() and put myloop() statements in start and change myloop to start in setTimeout function and run and tap tap tap tap tap tap....... on start button in web page 😌
    if(lmt==1){
        myloop();
        lmt++;
        }
}
function myloop(){
    mins=document.getElementById('minutes').value;
    secs=document.getElementById('seconds').value;
    msecs=document.getElementById('mseconds').value;

    if(msecs===''&&mins===''&&secs===''){//initlization
        mins=0;
        secs=0;
        msecs=0;
    }
    //convert to int
    msecs=parseInt(msecs);
    secs=parseInt(secs);
    mins=parseInt(mins);

    msecs+=1;
    if(msecs==100){
        secs+=1;
        msecs=0;
    }
    if(secs==60){
        mins+=1;
        secs=0;
    }

    mins=zero(mins);
    secs=zero(secs);
    msecs=zero(msecs);

    document.getElementById('minutes').value=mins;
    document.getElementById('seconds').value=secs;
    document.getElementById('mseconds').value=msecs;

    t=setTimeout(myloop,10);
}
var i=1;
var mlap;
var slap;
var mslap;
var li;
function lap(){
    mlap=document.getElementById('minutes').value=mins;
    slap=document.getElementById('seconds').value=secs;
    mslap=document.getElementById('mseconds').value=msecs;

    if(mlap==undefined && slap==undefined && mslap==undefined){
        alert('Start and lap');
    }
    else{
        mlap=zero(mlap);
        slap=zero(slap);
        mslap=zero(mslap);

        li=document.createElement('li');
        li.setAttribute('id','myli'+i);

        var txtLap=document.createTextNode('lap '+i+' '+mlap+':'+slap+':'+mslap);
        li.appendChild(txtLap);
        document.getElementById('laps').appendChild(li);
        i++;
    }

}
function reset(){
    clearTimeout(t);
    document.getElementById('minutes').value='';
    document.getElementById('seconds').value='';
    document.getElementById('mseconds').value='';

    mlap=undefined;
    slap=undefined;
    mslap=undefined;
    
    mins=undefined;
    secs=undefined;
    msecs=undefined;

    var x=i;
    for(let j=1;j<x;j++){
        document.getElementById('myli'+j).remove();
    }
    i=1;
    // location.reload();
}
function zero(z){//to put zero infront of numbers from 0 to 9
    if(z<10){
        z=parseInt(z);//string to int
        z='0'+z;//string + int
    }
    return z;
}
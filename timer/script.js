//created by vijay-busy
var t;
function start(){
    var hrs=document.getElementById('hours').value;
    var mins=document.getElementById('minutes').value;
    var secs=document.getElementById('seconds').value;

    //////////////////////////////////////////////////
    if(hrs===''&&mins===''&&secs===''){//if everything blank..
        alert('Enter atleast 1 second!');
    }
    if(hrs===''){//if hrs blank
        hrs=0;
    }
    if(mins===''){//if mins blank
        mins=0;
    }
    /////////////////////////////////////////////////
    if(mins>59 || secs>59){
        alert('Input in valid check Minutes or Seconds!');
    }
    else if(hrs==0 && mins==0 && secs==0){//time up message
        alert('Time up');
        reset();
    }
    else{
        secs-=1;
        if(secs==-1){
            secs=59;
            mins-=1
        }
        if(mins==-1){
            mins=59;
            hrs-=1
        }
        secs=zero(secs);
        mins=zero(mins);
        hrs=zero(hrs);
        document.getElementById('seconds').value=secs;
        document.getElementById('minutes').value=mins;
        document.getElementById('hours').value=hrs;

        t=setTimeout(start,1000);//delay 1 second
    }
}
function pause(){
    clearTimeout(t);//clears timeout means 1000=nan
}
function reset(){
    clearTimeout(t);//clears timeout means 1000=nan
    //resets to blank
    document.getElementById('seconds').value='';
    document.getElementById('minutes').value='';
    document.getElementById('hours').value='';

}
function zero(z){//to put zero infront of numbers from 0 to 9
    if(z<10){
        z=parseInt(z);//string to int
        z='0'+z;//string + int
    }
    return z;
}
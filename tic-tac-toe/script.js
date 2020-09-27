var player;
var boxes=document.querySelectorAll("#myGame div"),XO=0;
for(var i=0;i<boxes.length;i++){
    boxes[i].onclick=function(){
        if(this.innerHTML!=="X" && this.innerHTML!=="O"){
            if(XO%2===0){
                player="X";
                this.innerHTML="X";
                document.getElementById('plyNo').innerHTML="Player O Turn";
                winner();
                XO+=1;
            }
            else{
                player="O";
                this.innerHTML="O";
                document.getElementById('plyNo').innerHTML="Player X Turn";
                winner();
                XO+=1;
            }
        }
    };
}
function winner(){
    if(box1.innerHTML!=="" && box1.innerHTML==box2.innerHTML && box1.innerHTML==box3.innerHTML){
        document.getElementById('box1').style.color="lightGreen";
        document.getElementById('box2').style.color="lightGreen";
        document.getElementById('box3').style.color="lightGreen";
        fillBoxes();
        document.getElementById('win').innerHTML="Player "+player+" Win!";
        document.getElementById('plyNo').innerHTML=" ";
    }
    else if(box4.innerHTML!=="" && box4.innerHTML==box5.innerHTML && box4.innerHTML==box6.innerHTML){
        document.getElementById('box4').style.color="lightGreen";
        document.getElementById('box5').style.color="lightGreen";
        document.getElementById('box6').style.color="lightGreen";
        fillBoxes();
        document.getElementById('win').innerHTML="Player "+player+" Win!";
        document.getElementById('plyNo').innerHTML=" ";
    }
    else if(box7.innerHTML!=="" && box7.innerHTML==box8.innerHTML && box7.innerHTML==box9.innerHTML){
        document.getElementById('box7').style.color="lightGreen";
        document.getElementById('box8').style.color="lightGreen";
        document.getElementById('box9').style.color="lightGreen";
        fillBoxes();
        document.getElementById('win').innerHTML="Player "+player+" Win!";
        document.getElementById('plyNo').innerHTML=" ";
    }
    else if(box1.innerHTML!=="" && box1.innerHTML==box4.innerHTML && box1.innerHTML==box7.innerHTML){
        document.getElementById('box1').style.color="lightGreen";
        document.getElementById('box4').style.color="lightGreen";
        document.getElementById('box7').style.color="lightGreen";
        fillBoxes();
        document.getElementById('win').innerHTML="Player "+player+" Win!";
        document.getElementById('plyNo').innerHTML=" ";
    }
    else if(box2.innerHTML!=="" && box2.innerHTML==box5.innerHTML && box2.innerHTML==box8.innerHTML){
        document.getElementById('box2').style.color="lightGreen";
        document.getElementById('box5').style.color="lightGreen";
        document.getElementById('box8').style.color="lightGreen";
        fillBoxes();
        document.getElementById('win').innerHTML="Player "+player+" Win!";
        document.getElementById('plyNo').innerHTML=" ";
    }
    else if(box3.innerHTML!=="" && box3.innerHTML==box6.innerHTML && box3.innerHTML==box9.innerHTML){
        document.getElementById('box3').style.color="lightGreen";
        document.getElementById('box6').style.color="lightGreen";
        document.getElementById('box9').style.color="lightGreen";
        fillBoxes();
        document.getElementById('win').innerHTML="Player "+player+" Win!";
        document.getElementById('plyNo').innerHTML=" ";
    }
    else if(box1.innerHTML!=="" && box1.innerHTML==box5.innerHTML && box1.innerHTML==box9.innerHTML){
        document.getElementById('box1').style.color="lightGreen";
        document.getElementById('box5').style.color="lightGreen";
        document.getElementById('box9').style.color="lightGreen";
        fillBoxes();
        document.getElementById('win').innerHTML="Player "+player+" Win!";
        document.getElementById('plyNo').innerHTML=" ";
    }
    else if(box3.innerHTML!=="" && box3.innerHTML==box5.innerHTML && box3.innerHTML==box7.innerHTML){
        document.getElementById('box3').style.color="lightGreen";
        document.getElementById('box5').style.color="lightGreen";
        document.getElementById('box9').style.color="lightGreen";
        fillBoxes();
        document.getElementById('win').innerHTML="Player "+player+" Win!";
        document.getElementById('plyNo').innerHTML=" ";
    }
    else if(XO==8){
        document.getElementById('win').innerHTML="TIE";
    }
}
function fillBoxes(){
    for(var i=1;i<10;i++){
        document.getElementById('box'+i).innerHTML=player;
    }
}
// function reset(){
//     XO=0;
//     document.getElementById('plyNo').innerHTML="Player X Turn";
//     document.getElementById('win').remove();
//     for(var i=0;i<boxes.length;i++){
//         boxes[i].innerHTML="";
//         //document.getElementById('box'+i+1).style.color="white";
//     }
// }
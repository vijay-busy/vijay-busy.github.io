var z=0;
function add(){
    var txt=document.getElementById('inputField').value;
    if(txt===""){
        alert("Enter something");
    }
    else{
        var p=document.createElement('p');
        var input=document.createElement('input');
        var button1=document.createElement('button');
        var button2=document.createElement('button');
        
        var t=document.createTextNode(txt);
        input.appendChild(t);
        input.setAttribute('id','list'+z);
        input.setAttribute('value',txt);
    
        var x=document.createTextNode('x');
        button1.appendChild(x);
        button1.setAttribute('id','btn'+z);
        var v=document.createTextNode('√');
        button2.appendChild(v);
        button2.setAttribute('id','btn2'+z);
        
        p.appendChild(input);
        p.appendChild(button1);
        p.appendChild(button2);
        
        button2.style.backgroundColor='green';
        
        document.getElementById('myList').appendChild(p);
        document.getElementById('inputField').value='';

        button1.addEventListener('click',function exit(){
            var a=input.id;
            var b=button1.id;
            var c=button2.id;
            document.getElementById(a).remove();
            document.getElementById(b).remove();
            document.getElementById(c).remove();
        });
        button2.addEventListener('click',function check(){
            var d=input.id;
            document.getElementById(d).style.backgroundColor='lightGreen';
        });
        z++;
    }
}

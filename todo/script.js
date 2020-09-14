var z=0;
function add(){
    var txt=document.getElementById('inputField').value;
    if(txt===""){
        alert("Enter something");
    }
    else{
        var p=document.createElement('p');
        var input=document.createElement('input');
        var button=document.createElement('button');

        var t=document.createTextNode(txt);
        input.appendChild(t);
        input.setAttribute('id','list'+z);
        input.setAttribute('value',txt);

        var x=document.createTextNode('x');
        button.appendChild(x);
        button.setAttribute('id','btn'+z)
        p.appendChild(input);
        p.appendChild(button);
        document.getElementById('myList').appendChild(p);
        document.getElementById('inputField').value='';

        button.addEventListener('click',function exit(){
            var a=input.id;
            var b=button.id;
            document.getElementById(a).remove();
            document.getElementById(b).remove();
        });
        z++;
    }
}

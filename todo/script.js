// var z=0;
// function add(){
//     var li=document.createElement('li');
//     var span=document.createElement('span');
//     var button=document.createElement('button');

//     var txt=document.getElementById('inputField').value;
//     var t=document.createTextNode(txt);
//     li.appendChild(t);
//     li.setAttribute('id','list'+z);
//     z++;

//     var x=document.createTextNode('x');
//     button.appendChild(x);
//     li.appendChild(span);
//     span.appendChild(button);
//     document.getElementById('myList').appendChild(li);
//     document.getElementById('inputField').value=' ';

//     button.addEventListener('click',function exit(){
//         var y=li.id;
//         document.getElementById(y).remove();
//      });
// }
var z=0;
function add(){
    var p=document.createElement('p');
    var input=document.createElement('input');
    var button=document.createElement('button');

    var txt=document.getElementById('inputField').value;
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
    document.getElementById('inputField').value=' ';

    button.addEventListener('click',function exit(){
        var a=input.id;
        var b=button.id;
        document.getElementById(a).remove();
        document.getElementById(b).remove();
    });
    z++;
}
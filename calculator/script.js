function dis(val){
    document.getElementById('result').value+=val;
}
function solve() 
{ 
    let x = document.getElementById("result").value;
    let y = eval(x);//eval() is a fun used to solve the arthematic expression..
    document.getElementById("result").value = y;
}
function clr()
{ 
    document.getElementById("result").value = "";
}
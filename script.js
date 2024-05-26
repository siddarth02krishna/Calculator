let output=document.getElementById("out-put");
function display(num){
    output.value += num;
}
function Calculator(){
    try{
        output.value=eval(output.value);
    }
    catch(err){
        output.value="Invalid Syntax";
    }
}
function Clear(){
    output.value= "";
}
function del(){
    output.value=output.value.slice(0,-1);
}
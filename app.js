function insert(num){
    document.form.textview.value=document.form.textview.value+num;
}
function equal(){
    var exp=document.form.textview.value;
    var n=exp.includes("%");
    if(n){
        var a=exp.split("%");
        var b=a[0]*a[1];
        var x=b/100;
        document.form.textview.value=x;
    }
    else{
        document.form.textview.value=eval(exp);
    }
}
function clean(){
    document.form.textview.value ="";
}
function back(){
    var exp=document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1);
}

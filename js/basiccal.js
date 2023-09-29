function insert(val) {
    console.log(val);
    
   document.form1.textview.value = document.form1.textview.value + val
    
}

function equal() {

    let ans = document.form1.textview.value;
    // console.log(ans);
    
    let exp = eval(ans);

    document.form1.textview.value = exp;
    
    // console.log(exp);
}

function hadlClear() {
    
    document.form1.textview.value = ' '

}

function backspace() {
    let exp = document.form1.textview.value;

    document.form1.textview.value = exp.substring(0,exp.length - 1);
    
}

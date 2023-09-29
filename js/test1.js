function handlSubmit() {
    event.preventDefault()
    // console.log("ok");

    let ans = parseFloat(document.getElementById("Number").value);
    let select = document.getElementById("select").value;
    let select1 = document.getElementById("select1").value;

    // console.log(ans,select,select1);

    let calculat;
    let ansE = true;
    
    if (!ans || ans <= 0) {
        document.getElementById("NumberErr").innerHTML = "Please Enter Vaule"
    } else {
        document.getElementById("NumberErr").innerHTML = " "
        ansE = false;
    }

    if (ansE) {
        return false;
    } else {
        if (select === "cm" && select1 === "km") {
            calculat = ans / 100000;
        }else if (select === "cm" && select1 === "m") {
            calculat = ans / 100;
        }else if (select === "cm" && select1 === "km") {
            calculat = ans;
        }
    
        if (select === "m" && select1 === "cm") {
            calculat = ans * 100000;
        }else if (select === "m" && select1 === "m") {
            calculat = ans * 1000;
        }else if (select === "m" && select1 === "km") {
            calculat = ans;
        }
    
        if (select === "km" && select1 === "cm") {
            calculat = ans * 100;
        }else if (select === "km" && select1 === "m") {
            calculat = ans / 1000;
        }else if (select === "km" && select1 === "km") {
            calculat = ans ;
        }

        document.getElementById("total").innerHTML = calculat;
        return false
    }

    // if (ans === '') {
    //     document.getElementById("NumberErr").innerHTML = "Please Enter Value";
    // } else {
    //     let numReg = /^[0]?[1-1000]\d{1000}$/;

    //     if (numReg.test (ans)) {
    //         document.getElementById("NumberErr").innerHTML = "";
    //     } else {
    //         document.getElementById("NumberErr").innerHTML = "Please Enter Valid value";
    //     }
    //     // document.getElementById("NumberErr").innerHTML = "";
    // }

    // return false;
}
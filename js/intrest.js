function handlSubmit() {
    event.preventDefault();
    // console.log("Done");

    let P = parseFloat(document.getElementById("P").value);
    let r = parseFloat(document.getElementById("r").value);
    let time = parseFloat(document.getElementById("time").value);
    let select = document.getElementById("select").value;

    let PrincipleE = true;
    let rateE = true;
    let timeE = true;
    let selectE = true;

    // console.log(P,r,time,select);
    
    let ans = "";
   

    if (P > 0 && P <= 10000000) {
        document.getElementById("PrincipleErr").innerHTML = "";
        PrincipleE = false;
    } else {
        document.getElementById("PrincipleErr").innerHTML = "Please Enter Amount";
    }

    if (r > 0 && r <= 10000000) {
        document.getElementById("rateErr").innerHTML = "";
        rateE = false;
    } else {
        document.getElementById("rateErr").innerHTML = "Please Enter Rate";
    }

    if (time > 0 && time <= 1000) {
        document.getElementById("timeErr").innerHTML = "";
        timeE = false;
    } else {
        document.getElementById("timeErr").innerHTML = "Please Enter Time";
    }

    if (select === '0') {
        document.getElementById("selectErr").innerHTML = "Please Enter Time Period";
        
    } else {
        document.getElementById("selectErr").innerHTML = "";
        selectE = false;
    }

    if (PrincipleE || rateE || timeE || selectE ) {
        return false;
    } else {
        if (select === 'y') {
            ans = (P * r * time)/100;
        } else if (select === 'm') {
            ans = (P * r * time)/1200
            
        }
        document.getElementById("total").innerHTML = ans
        return false
    }

    // console.log(ans);
}
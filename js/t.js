function handleSubmit () {
    // console.log("ok");

    let value = parseFloat(document.getElementById("value").value);
    let co1 = document.getElementById("conver1").value;
    let co2 = document.getElementById("conver2").value;

    // console.log(value , co1 , co2);

    let convert;
    let valueE = true;

    

    if (!value || value <= 0) {
        document.getElementById("valueEro").innerHTML = "please enter value";
    }else {
        document.getElementById("valueEro").innerHTML = "";
        valueE = false ;
    }

    // document.getElementById("ans").innerHTML = convert;
    // console.log(convert);

    if (valueE) {
        return false 
    }else {
        if (co1 === "cm" && co2 === "km") {
            convert = value / 100000;
        }else if (co1 === "cm" && co2 === "m") {
            convert = value / 100;
        }else if (co1 === "cm" && co2 === "cm") {
            convert = value;
        }
    
        if (co1 === "km" && co2 === "cm") {
            convert = value * 100000;
        }else if (co1 === "km" && co2 === "m") {
            convert = value * 1000;
        }else if (co1 === "km" && co2 === "km") {
            convert = value;
        }
    
        if (co1 === "m" && co2 === "cm") {
            convert = value * 100;
        }else if (co1 === "m" && co2 === "km") {
            convert = value / 1000;
        }else if (co1 === "m" && co2 === "m") {
            convert = value ;
        }
        document.getElementById("ans").innerHTML = convert;
        return false
    }

    // return false
}
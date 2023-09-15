function handlSubmit() {
    event.preventDefault()
    // console.log("ok");



    let salary = parseInt(document.getElementById("salary").value);
    let salaryE = true;

    let s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0, s6 = 0, total;



    if (salary <= 300000) {
        s1 = 0, s2 = 0, s3 = 0, s4 = 0, s5 = 0, s6 = 0
    } else if (salary <= 600000) {
        s1 = 0
        s2 = (salary - 300000) * 0.5;
    } else if (salary <= 900000) {
        s1 = 0
        s2 = (300000) * 0.5;
        s3 = (salary - 600000) * 0.10;

    } else if (salary <= 1200000) {
        s1 = 0
        s2 = (300000) * 0.5;
        s3 = (300000) * 0.10;
        s4 = (salary - 900000) * 0.15;

    } else if (salary <= 1500000) {
        s1 = 0
        s2 = (300000) * 0.5;
        s3 = (300000) * 0.10;
        s4 = (300000) * 0.15;
        s5 = (salary - 1200000) * 0.20;

    } else if (salary > 1500000) {
        s1 = 0
        s2 = (300000) * 0.5;
        s3 = (300000) * 0.10;
        s4 = (300000) * 0.15;
        s5 = (300000) * 0.20;
        s6 = (salary - 1500000) * 0.30;
    }

    total = s1 + s2 + s3 + s4 + s5 + s6;

    if (salary <= 0) {
        document.getElementById("error").innerHTML = "Please Enter Valid Salary"
    } else if (!salary) {
        document.getElementById("error").innerHTML = "Please Enter Salary"
    } else {
        document.getElementById("error").innerHTML = ""
        salaryE = false
    }

    if (salaryE) {
        return false
    } else {

        document.getElementById("total").innerHTML = total
        document.getElementById("slab-1").innerHTML = s1
        document.getElementById("slab-2").innerHTML = s2
        document.getElementById("slab-3").innerHTML = s3
        document.getElementById("slab-4").innerHTML = s4
        document.getElementById("slab-5").innerHTML = s5
        document.getElementById("slab-6").innerHTML = s6


        return true;
    }


    // console.log(s1, s2, s3, s4, s5, s6);

}
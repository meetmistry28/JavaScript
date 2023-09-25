function handlSubmit() {
    // event.defaultPrevented()
    // console.log("ok");

    let n = document.getElementById("name").value;
    let bd = parseInt(document.getElementById("b_date").value);
    let mn = parseInt(document.getElementById("m_no").value);

    console.log(n, bd, mn);

    let Salaried
    let Self_Employee

    let Primium
    let Age


    if (Salaried) {
        if (Age >= 18 && Age <= 25) {
            Primium = 1000
        } else if (Age >= 26 && Age <= 35) {
            Primium = 1500
        } else if (Age >= 36 && Age <= 45) {
            Primium = 2000
        } else if (Age > 45) {
            Primium = 2500
        }
    } else if (Self_Employee) {
        if (Age >= 18 && Age <= 25) {
            Primium = 1000 * 0.10
        } else if (Age >= 26 && Age <= 35) {
            Primium = 1500 * 0.10
        } else if (Age >= 36 && Age <= 45) {
            Primium = 2000 * 0.10
        } else if (Age > 45) {
            Primium = 2500 * 0.10
        }
    }

}

function handlClick() {
    // console.log("kpokjj");


    let print = ''

    print += "<table><th>Name</th><th>Age</th><th>Mobile No</th><th>Insurance Amount</th><th>Primium</th>"


    let income;
    let Return;


    if (income < 300000) {
        Return = 5000000
    } else if (income >= 300000 && income <= 500000) {
        Return = 10000000
    } else if (income >= 500000 && income <= 1000000) {
        Return = 15000000
    } else if (income >1000000) {
        Return = 20000000
    }

    document.getElementById("disp").innerHTML = print
}




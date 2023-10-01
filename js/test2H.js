let Age;
let amount;
let ans;


function handlSubmit() {
    // console.log("okkkkk");

    let age = document.getElementById("date").value;
    let occupation = document.formvalue.work.value;
    let income = document.getElementById("income").value;
    let amo = document.getElementById("amount").value;
    let smoke = document.formvalue.smokeing.value;

    let d = new Date(age);
    let year = (d.getFullYear());
    Age = 2023 - year;
    // console.log(finalAge);
    let Premium;
    let Premium18 = 1000;
    let Premium26 = 1500;
    let Premium36 = 2000;
    let Premium45 = 2500;
    

    if (occupation === "Self_Employee") {
        if (Age >= 18 && Age <= 25) {
            Premium = (Premium18 * 0.10) + 1000;
        } else if (Age >= 26 && Age <= 35) {
            Premium = (Premium26 * 0.10) + 1500;
        } else if (Age >= 36 && Age <= 45) {
            Premium = (Premium36 * 0.10) + 2000;
        } else if (Age > 45) {
            Premium = (Premium45 * 0.10) + 2500;
        }
    } else {
        if (Age >= 18 && Age <= 25) {
            Premium = 1000;
        } else if (Age >= 26 && Age <= 35) {
            Premium = 1500;
        } else if (Age >= 36 && Age <= 45) {
            Premium = 2000;
        } else if (Age > 45) {
            Premium = 2500;
        }
    }

    // console.log(Premium);


    if (income === "0-3") {
        amount = 5000000;
    } else if (income === "3-5") {
        amount = 10000000;
    } else if (income === "5-10") {
        amount = 15000000;
    } else if (income === "up10") {
        amount = 20000000;
    }

    if (income === "0-3" && amo >= 5000000) {
        document.getElementById("error").innerHTML = "please enter amuont"
    } else if (income === "3-5" && amo > 10000000) {
        document.getElementById("error").innerHTML = "please enter amuont"
    } else if (income === "5-10" && amo > 15000000) {
        document.getElementById("error").innerHTML = "please enter amuont"
    } else if (income === "up10" && amo > 20000000) {
        document.getElementById("error").innerHTML = "please enter amuont"
    } else {
        document.getElementById("error").innerHTML = ""
    }


    let smokePremium;

    if (smoke === "Yes") {
        if (Age >= 18 && Age <= 25) {
            smokePremium = (Premium18 * 0.20);
        } else if (Age >= 26 && Age <= 35) {
            smokePremium = (Premium26 * 0.20);
        } else if (Age >= 36 && Age <= 45) {
            smokePremium = (Premium36 * 0.20);
        } else if (Age > 45) {
            smokePremium = (Premium45 * 0.20);
        }
    } else {
        smokePremium = 0;
    }


    ans = smokePremium + Premium;
    // console.log(ans);

    return false
}

function handleClick() {
    // event.preventDefault();
    let Fullname = document.getElementById("name").value;
    let number = document.getElementById("m_no").value;

    let print = "";

    print += '<table border="1"><tr><th>Name</th><th>Age</th><th>Mobile number</th><th>Insuarance amount</th><th>Premium</th></tr>'

    print += '<tr>'

    print += '<td>'
    print += Fullname;
    print += '</td>'

    print += '<td>'
    print += Age;
    print += '</td>'

    print += '<td>'
    print += number;
    print += '</td>'

    print += '<td>'
    print += amount;
    print += '</td>'

    print += '<td>'
    print += ans;
    print += '</td>'

    print += '</tr>'

    print += '</table>'


    document.getElementById("temp").innerHTML = print;
    document.getElementById("Ans").style.display = "block";

    // return false
}
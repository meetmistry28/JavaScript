function handlChange() {
    // console.log("ok");

    let countryName = document.getElementById("country").value

    // console.log(countryName);

    if (countryName === 'in') {
        // console.log("India");
        document.getElementById("body").style.backgroundColor = 'orange'

    } else if (countryName === 'uk') {
        // console.log("United Kingdom");
        document.getElementById("body").style.backgroundColor = 'red'

    } else if (countryName === 'us') {
        // console.log("Unaites State Of America");
        document.getElementById("body").style.backgroundColor = 'blue'

    } else {
        // console.log("Please Select");
        document.getElementById("body").style.backgroundColor = 'white'
    }
}
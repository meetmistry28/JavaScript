function validateForm() {
    event.preventDefault()

    let name = document.contactForm.name.value;
    let email = document.contactForm.email.value;
    let mobile = document.contactForm.mobile.value;
    // console.log(name);
    // console.log(email);
    // console.log(mobile);

    if (name === '') {
        document.getElementById("nameErr").innerHTML = "Please Enter Name"
    } else {

        let nameReg = /^[a-zA-Z ]{2,30}$/;

        if (nameReg.test(name)) {
            document.getElementById("nameErr").innerHTML = " "
        } else {
            document.getElementById("nameErr").innerHTML = "Please Enter Valid Name"
        }
    }

    if (email === '') {
        document.getElementById("emailErr").innerHTML = "Please Enter Email"
    } else {

        let emailReg = /\S+@\S+\.\S+/;

        if (emailReg.test(email)) {
            document.getElementById("emailErr").innerHTML = " "
        } else {
            document.getElementById("emailErr").innerHTML = "Please Enter Valid Email"
        }

    }

    if (mobile === '') {
        document.getElementById("mobileErr").innerHTML = "Please Enter Mobile Number"
    } else {

        let mobileReg = /^[0]?[123456789]\d{9}$/;

        if (mobileReg.test (mobile)) {
            document.getElementById("mobileErr").innerHTML = " "
        } else {
            document.getElementById("mobileErr").innerHTML = "Please Enter Valid Mobile Number"
        }
        
    }

    let country = document.contactForm.country.value;
    // console.log(country);

    if (country === '0') {
        document.getElementById("countryErr").innerHTML = "Please Select Country"
    } else {
        document.getElementById("countryErr").innerHTML = " "
    }

    
    return false;
}
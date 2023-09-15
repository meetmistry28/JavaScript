function validateForm() {
    // event.preventDefault()

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

        let mobileReg = /^[0]?[1-9]\d{9}$/;

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


    let gender1 = document.contactForm.gender.value;

    let hobby = document.contactForm.hobbies;
    // console.log(hobby[0].value , hobby[0].checked);

    let gender1E = true;
    let hobbyE = true;


    if (gender1 === "") {
        document.getElementById("genderErr").innerHTML = "please select gender."
    } else {
        document.getElementById("genderErr").innerHTML = ""
        gender1E = false;
        // console.log(gender1E);
    }

    let flag = false;
    for (let i = 0; i < hobby.length; i++) {
        if (hobby[i].checked) {
            flag = true;
            break;
        }
    }

    if (flag) {
        document.getElementById("hobbyErr").innerHTML = "";
        hobbyE = false;
        // console.log(hobbyE);
    } else {
        document.getElementById("hobbyErr").innerHTML = "please select any one hobby."
    }

    if (nameE || emailE || numberE || countryE || gender1E || hobbyE) {
        // console.log(nameE , emailE , numberE , countryE , gender1E , hobbyE);
        return false;
    } else {
        return true;
    }


    // console.log(name1,gender,hobby);
      
    // return false;
}
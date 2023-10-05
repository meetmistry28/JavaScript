// localStorage.setItem('firstname','meet')
// localStorage.setItem('lastname','mistry')
// // console.log(localStorage.getItem('firstname'));
// localStorage.removeItem('lastname')



// // sessionStorage.setItem('location','surat')
// // sessionStorage.removeItem('location')

// // console.log(sessionStorage.getItem('location'));



const handlSubmit = () => {


    let localdata = JSON.parse(localStorage.getItem("name"));

    let name = document.getElementById("name").value;

    console.log(name);

    if (localdata) {
        localdata.push(name);

        localStorage.setItem("name", JSON.stringify(localdata));
    } else {

        localStorage.setItem("name", JSON.stringify([name]));
    }


    // arr.push(name);

}

const Display = () => {
    let data = JSON.parse(localStorage.getItem("name"));
    let disElem = document.getElementById("disp")
    disElem.innerHTML = ""


    data.map((l) => {
        let liElem = document.createElement("li");
        let liText = document.createTextNode(l)

        liElem.appendChild(liText);
        disElem.appendChild(liElem);
    });
}

Display()
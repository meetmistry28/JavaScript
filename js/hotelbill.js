const handlesubmit = () => {
    let date = document.getElementById("date").value;
    let table = document.getElementById("table").value;
    let food = document.getElementById("food").value;
    let person = document.getElementById("person").value;

    let obj = {
        date: date,
        table: table,
        food: food,
        person: person
    }
    console.log(obj);

    let localdata = JSON.parse(localStorage.getItem("hotel"));

    if (localdata) {
        localdata.push(obj)
        localStorage.setItem("hotel", JSON.stringify(localdata))
    } else {
        localStorage.setItem("hotel", JSON.stringify([obj]))
    }
    display()  
}
//     let dateErr = true;
//     let tableErr = true;
//     let foodErr = true;
//     let personErr = true;

//     console.log(date , table , food , person);
//     if (date === "") {
//         document.getElementById("dateErr").innerHTML = "Please Select Date";
//         document.getElementById("dateErr").style.color = "red";
//     }else{
//         document.getElementById("dateErr").innerHTML = "";
//         dateErr = false;   
//     }
//     if(table === "0"){
//         document.getElementById("tableErr").innerHTML = "Please Select Table";
//         document.getElementById("tableErr").style.color = "red";
//     }else{
//         document.getElementById("tableErr").innerHTML = "";
//         tableErr = false;
//     }
//     if (food === "0") {
//         document.getElementById("foodErr").innerHTML = "Please Select Food";
//         document.getElementById("foodErr").style.color = "red";
//     }else{
//         document.getElementById("foodErr").innerHTML = "";
//         foodErr = false;

//     }
//     if (person === '' || person === "0" ) {
//         document.getElementById("personErr").innerHTML = "Please Enter Person";
//         document.getElementById("personErr").style.color = "red";

//     }else{
//         document.getElementById("personErr").innerHTML = "";
//         personErr = false;
//     }

//     localStorage.setItem("dateDetail" , JSON.stringify(date));
//     localStorage.setItem("tableDetail" , JSON.stringify (table));
//     localStorage.setItem("foodDetail" , JSON.stringify(food));
//     localStorage.setItem("personDetai" , JSON.stringify(person));
//     


const display = () => {
    let hoteldisp = JSON.parse(localStorage.getItem("hotel"));

    let display = document.getElementById("disp");
    display.innerHTML = ""

    let trElem = document.createElement("tr");
        let tdElem = document.createElement("th");
        let tdText = document.createTextNode(v.date);

        tdElem.appendChild(tdText);
        trElem.appendChild(tdElem);
        display.appendChild(trElem);

       
        let tdElem1 = document.createElement("th");
        let tdText1 = document.createTextNode(v.table);

        
        tdElem1.appendChild(tdText1);
        trElem.appendChild(tdElem1);

        
        let tdElem2 = document.createElement("th");
        let tdText2 = document.createTextNode(v.food);

        
        tdElem2.appendChild(tdText2);
        trElem.appendChild(tdElem2);

        
        let tdElem3 = document.createElement("th");
        let tdText3 = document.createTextNode(v.person);

        
        tdElem3.appendChild(tdText3);
        trElem.appendChild(tdElem3);

        
        let tdElem4 = document.createElement("th");
        let tdText4 = document.createTextNode(v.total);

        
        tdElem4.appendChild(tdText4);
        trElem.appendChild(tdElem4 );

        
    hoteldisp.map((v,i) => {
        let trElem = document.createElement("tr");
        let tdElem = document.createElement("td");
        let tdText = document.createTextNode(v.date);

        tdElem.appendChild(tdText);
        trElem.appendChild(tdElem);
        display.appendChild(trElem);

       
        let tdElem1 = document.createElement("td");
        let tdText1 = document.createTextNode(v.table);

        
        tdElem1.appendChild(tdText1);
        trElem.appendChild(tdElem1);

        
        let tdElem2 = document.createElement("td");
        let tdText2 = document.createTextNode(v.food);

        
        tdElem2.appendChild(tdText2);
        trElem.appendChild(tdElem2);

        
        let tdElem3 = document.createElement("td");
        let tdText3 = document.createTextNode(v.person);

        
        tdElem3.appendChild(tdText3);
        trElem.appendChild(tdElem3);

        
        let tdElem4 = document.createElement("td");
        let tdText4 = document.createTextNode(v.total);

        
        tdElem4.appendChild(tdText4);
        trElem.appendChild(tdElem4 );
    });
}
display()
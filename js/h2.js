const handleSubmit = () => {
    // console.log("okkk");
    let date = document.getElementById("date").value;
    let table = document.getElementById("table").value;
    let food = document.getElementById("food").value;
    let Person = document.getElementById("person").value;

    let foodName;
    let rate;

    if (date === " " || table === "0" || Person === "") {
        document.getElementById("d-error").innerHTML = ""
    } else {
        if (food === "250") {
            foodName = 'Punjabi';
            rate = 250;
        } else if (food === "150") {
            foodName = 'chinees';
            rate = 150;
        } else if (food === "200") {
            foodName = 'south - india';
            rate = 200;
        }

        let total = rate * Person
        let obj = {
            "Date": date,
            "Table": table,
            "Food": foodName,
            "Parson": Person,
            "TotalBill": total,
        }


        let localHotel = JSON.parse(localStorage.getItem("hoteldata"));

        if (localHotel == null) {
            localStorage.setItem("hoteldata", JSON.stringify([obj]));
        } else {
            localHotel.push(obj);
            localStorage.setItem("hoteldata", JSON.stringify(localHotel));
        }
        display()
    }

}


const display = () => {
    let localHotel = JSON.parse(localStorage.getItem("hoteldata"));

    let dispElem = document.getElementById("disp");

    let finalBill = localHotel.reduce((acc, v) => acc + v.TotalBill, 0);
    console.log(finalBill);

    localHotel.map((v, i) => {
        // console.log(v);
        let id = Math.floor(Math.random() * 1000);

        let trElem = document.createElement("tr");
        trElem.setAttribute("id", id)

        let tdElem = document.createElement("td");
        let tdTxt = document.createTextNode(i + 1)
        tdElem.appendChild(tdTxt);
        trElem.appendChild(tdElem);


        let tdElem1 = document.createElement("td");
        let tdTxt1 = document.createTextNode(v.Date)
        tdElem1.appendChild(tdTxt1);
        trElem.appendChild(tdElem1);

        let tdElem2 = document.createElement("td");
        let tdTxt2 = document.createTextNode(v.Table)
        tdElem2.appendChild(tdTxt2);
        trElem.appendChild(tdElem2);

        let tdElem3 = document.createElement("td");
        let tdTxt3 = document.createTextNode(v.Food)
        tdElem3.appendChild(tdTxt3);
        trElem.appendChild(tdElem3);

        let tdElem4 = document.createElement("td");
        let tdTxt4 = document.createTextNode(v.Parson);
        tdElem4.appendChild(tdTxt4);
        trElem.appendChild(tdElem4);

        let tdElem5 = document.createElement("td");
        let tdTxt5 = document.createTextNode(v.TotalBill);
        tdElem5.appendChild(tdTxt5);
        trElem.appendChild(tdElem5);

        let tdElemX = document.createElement("td");
        let tdTxtX = document.createTextNode("X");
        tdElemX.setAttribute("onclick", "handleremove(" + id + ")");
        tdElemX.appendChild(tdTxtX);
        trElem.appendChild(tdElemX);

        dispElem.appendChild(trElem);
        // dispElem.appendChild(divElem);

    })


    let trFelem = document.createElement("tr");

    let thFelem = document.createElement("th");
    thFelem.setAttribute("colspan", "5");
    let thFTxt = document.createTextNode("Final counter");

    let tdFelem = document.createElement("td");
    let tdFTxt = document.createTextNode(finalBill);

    thFelem.appendChild(thFTxt);
    trFelem.appendChild(thFelem);

    tdFelem.appendChild(tdFTxt);
    trFelem.appendChild(tdFelem);

    dispElem.appendChild(trFelem);
}

display();

const handleremove = (id) => {

}
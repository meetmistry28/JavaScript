let update = null;
const handlesubmit = () => {
    var date = document.getElementById("tdate").value;
    var table = document.getElementById("table").value;
    var fooddp = document.getElementById("food").value;
    var nopar = document.getElementById("parson").value;
    var food;
    var id = Math.floor(Math.random() * 100);
    let localdata = JSON.parse(localStorage.getItem("hoteldata"));  
    if (nopar == '' || date == '') {
        event.preventDefault()
        document.getElementById("error").innerHTML='Please Enter Parson ';
    }else if(nopar <= 0){
        event.preventDefault()
        document.getElementById("error").innerHTML='Invlade Parson';
    } else {
        if(update == null){
            if (fooddp === "Panjabi") {
                food = "Panjabi";
                rate = 250 * nopar;
            } else if (fooddp === "Chinees") {
                food = "Chinees";
                rate = 150 * nopar;
            } else if (fooddp === "SouthIndian") {
                food = "South-Indian";
                rate = 200 * nopar;
            }
    var obj={
                "id": id,
                "Date": date,
                "Table": table,
                "Food": food,
                "Parson": nopar,
                "TotalBill": rate,
            }
          
            if (localdata == null) {
                localStorage.setItem("hoteldata", JSON.stringify([obj]));
            } else {
                localdata.push(obj);
                localStorage.setItem("hoteldata", JSON.stringify(localdata));
            }
            console.log("Data-Added");
        }else{  
            if (fooddp == "Panjabi") {
                food = "Panjabi";
                rate = 250 * nopar;
            } else if (fooddp == "Chinees") {
                food = "Chinees";
                rate = 150 * nopar;
            } else if (fooddp == "SouthIndian") {
                food = "South-Indian";
                rate = 200 * nopar;
            } 
           let obj={
                id:update,
                date,
                table,
                food,
                nopar,
                rate
            } 
            let index = localdata.findIndex((v)=>v.id == update);               
            localdata[index]=obj;
            localStorage.setItem("hoteldata", JSON.stringify(localdata));
   
            window.location.reload()
        }
        update=null;
    }
   }

const display = () => {
    var localdata = JSON.parse(localStorage.getItem("hoteldata"));
   
    var tableref = document.getElementById("disp");

    var finelbill = localdata.reduce((acc, v) => acc + v.TotalBill, 0);


    localdata.map((v, i) => {
        
        let trdele = document.createElement("tr");
        trdele.setAttribute("id","(disp-"+v.id+")")
        let td0 = document.createElement("td");
        let th0 = document.createTextNode(i + 1);

        let tdele = document.createElement("td");
        let tdd = document.createTextNode(v.Date);


        let td1 = document.createElement("td");
        let th1 = document.createTextNode(v.Table);

        let td2 = document.createElement("td");
        let th2 = document.createTextNode(v.Food);

        let td3 = document.createElement("td");
        let th3 = document.createTextNode(v.Parson);

        let td4 = document.createElement("td");
        td4.setAttribute("id","bill1");
        let th4 = document.createTextNode(v.TotalBill);

        let btnelem = document.createElement("button");
        btnelem.setAttribute("onclick", "handleremove(" + v.id + ")")
        let btntxt = document.createTextNode('Delete ');

        let btnedit = document.createElement("button");
        btnedit.setAttribute("onclick", "handleedit(" + v.id + ")")
        let btedit = document.createTextNode("Edit");



        tdele.appendChild(tdd);
        td0.appendChild(th0);
        trdele.appendChild(td0)
        trdele.appendChild(tdele);
        tableref.appendChild(trdele)



        td1.appendChild(th1);
        trdele.appendChild(td1)

        td2.appendChild(th2);
        trdele.appendChild(td2)

        td3.appendChild(th3);
        trdele.appendChild(td3)

        td4.appendChild(th4);
        trdele.appendChild(td4)

        btnedit.appendChild(btedit);
        trdele.appendChild(btnedit);

        btnelem.appendChild(btntxt);
        trdele.appendChild(btnelem);

    });

    let ntr = document.createElement("tr");
    let nth = document.createElement("th");
    nth.setAttribute('colspan', '5');
    let ntht = document.createTextNode("Finle Counter ");

    let ntd = document.createElement("td")
    ntd.setAttribute("id", "bill");
    let ntdt = document.createTextNode("Rs." + finelbill);

    nth.appendChild(ntht);
    ntr.appendChild(nth);
    ntd.appendChild(ntdt);
    ntr.appendChild(ntd);
    tableref.appendChild(ntr);
    
}

const handleedit = (id) => {    
   
    let localdata = JSON.parse(localStorage.getItem('hoteldata'));
    let index = localdata.findIndex((v)=>v.id==id)
    // console.log(index);
    document.getElementById("parson").value = localdata[index].Parson;
    document.getElementById("food").value = localdata[index].Food;
    document.getElementById("table").value = localdata[index].Table;
    document.getElementById("tdate").value = localdata[index].Date;
    
    update= localdata[index].id;
}
const handleremove = (i) => {
let localdata = JSON.parse(localStorage.getItem('hoteldata'));

   let fdata= localdata.filter((v)=>v.id !== i)
    localStorage.setItem("hoteldata", JSON.stringify(fdata));
    window.location.reload()
}
window.onload=display();



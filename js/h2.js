let updetIndex = null;
const handlesubmit = () => {
  //console.log("ok");
  // event.preventDefault();
  let id = Math.floor(Math.random() * 1000);

  let date = document.getElementById("date").value;
  let table = document.getElementById("tnumber").value;
  let food = document.getElementById("food").value;
  let Number = document.getElementById("pnumber").value;

//   let dateE = true;
//   let  tableE = true;
//   let foodE = true;
//   let NumberE = true;

//   if(date === '0'){
//     document.getElementById("tableerror").innerHTML =
//     "Please select date";
//  }else{
//   document.getElementById("tableerror").innerHTML = "";
//   dateE = false;

//  }

//   if ( table === "0") {
//     document.getElementById("tableerror").innerHTML =
//       "Please select your table no";
//   } else {
//     document.getElementById("tableerror").innerHTML = "";
//     tableE = false;
//   }
//   if (food === "0") {
//     document.getElementById("fooderror").innerHTML =
//       "Please select your food";
//   } else {
//     document.getElementById("fooderror").innerHTML = "";
//     foodE = false;
//   }
//   if (Number === " ") {
//     document.getElementById("personerror").innerHTML =
//       "Please Enter your number";
//   } else {
//     document.getElementById("personerror").innerHTML = "";
//     NumberE = false;
//   }

//   if (dateE || tableE || foodE || NumberE) {
//     return false;
//   } else {
//     return true;
//   }




  let tabledata = JSON.parse(localStorage.getItem("hotel"));

  if (updetIndex !== null) {

    let updatedObj  = {
      id:updetIndex,
      date,
      table,
      food,
      Number
    }
    //console.log(updatedObj);
    tabledata[updetIndex] = updatedObj;
    localStorage.setItem("hotel", JSON.stringify(tabledata));
    updetIndex = null;
  
  } else {
   
    let obj = {
      id,
      date,
      table,
      food,
      Number,
    }
    if (tabledata) {
      tabledata.push(obj);
      localStorage.setItem("hotel", JSON.stringify(tabledata));

    } else {
      localStorage.setItem("hotel", JSON.stringify([obj]));
    }
  }

  window.location.reload();
}

const handleremove = (id) => {
  //console.log(id);
  let tabledata = JSON.parse(localStorage.getItem("hotel"));

  let fdata = tabledata.filter((item) => item.id != id);
  localStorage.setItem("hotel", JSON.stringify(fdata));

  window.location.reload();
}
const handleedit = (id) => {
  //console.log(id);
  let tabledata = JSON.parse(localStorage.getItem("hotel"));
  //console.log(tabledata);

  let index = tabledata.findIndex((item) => item.id === id);
 

  document.getElementById("date").value = tabledata[index].date;
  document.getElementById("tnumber").value = tabledata[index].table;
  document.getElementById("food").value = tabledata[index].food;
  document.getElementById("pnumber").value = tabledata[index].Number;


  updetIndex = index;

 // window.location.reload();
}
const Display = () => {
  let tabledata = JSON.parse(localStorage.getItem("hotel"));
  let tableref = document.getElementById("disp");

  if (tabledata) {
    tabledata.map((item) => {
      let newRow = document.createElement("tr");

      let dateCell = document.createElement("td");
      let dateCellTxt = document.createTextNode(item.date);
      dateCell.appendChild(dateCellTxt);
      newRow.appendChild(dateCell);
      tableref.appendChild(newRow);

      let tableNumberCell = document.createElement("td");
      let tableNumberCellTxt = document.createTextNode(item.table);
      tableNumberCell.appendChild(tableNumberCellTxt);
      newRow.appendChild(tableNumberCell);
      tableref.appendChild(newRow);

      let foodCell = document.createElement("td");
      let foodCellTxt = document.createTextNode(item.food);
      foodCell.appendChild(foodCellTxt);
      newRow.appendChild(foodCell);
      tableref.appendChild(newRow);

      let personNumberCell = document.createElement("td");
      let personNumberCellTxt = document.createTextNode(item.Number);
      personNumberCell.appendChild(personNumberCellTxt);
      newRow.appendChild(personNumberCell);
      tableref.appendChild(newRow);

      let totalCell = document.createElement("td");
      let totalCellTxt = document.createTextNode(item.food * item.Number);
      totalCell.appendChild(totalCellTxt);
      newRow.appendChild(totalCell);
      tableref.appendChild(newRow);

      let btnElem = document.createElement("button");
      btnElem.setAttribute("onclick", "handleremove(" + item.id + ")");
      let btnText = document.createTextNode("X");
      btnElem.appendChild(btnText);
      newRow.appendChild(btnElem);
      tableref.appendChild(newRow);

      let btnEdit = document.createElement("button");
      btnEdit.setAttribute("onclick", "handleedit(" + item.id + ")");
      let btneditText = document.createTextNode("E");
      btnEdit.appendChild(btneditText);
      newRow.appendChild(btnEdit);
      tableref.appendChild(newRow);
    })
  }
}

Display();
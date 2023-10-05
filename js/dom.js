// const handlClick = () => {
//     console.log("Click!!");
// }
// let divElem = document.getElementById("disp");
// let h1Elem = document.createElement("h1");
// let h1Text = document.createTextNode("Hello");

// h1Elem.appendChild(h1Text);

// divElem.appendChild(h1Elem);

// let aElem = document.createElement("a");
// aElem.setAttribute("href","#");
// aElem.setAttribute("onclick","handlClick()")
// let aText = document.createTextNode("home");

// aElem.appendChild(aText);
// divElem.appendChild(aElem);


const handlRemove = (id) => {
    let div = document.getElementById("div-", + id)
    console.log("remove");
    div.remove()

}
const handlSubmit = () => {
    event.preventDefault()

    let name = document.getElementById("name").value;
    console.log("ok");

    let id = Math.floor(Math.random() * 1000);
    console.log(id);
    

    let parentDiv = document.getElementById("disp");
    let divElem = document.createElement("div");
    divElem.setAttribute("id","div-" + id);
    let divText = document.createTextNode(name);

    let btnElem = document.createElement("button");
    btnElem.setAttribute("onclick","handlRemove("+ id +")");

    let btnText = document.createTextNode("X");  

    divElem.appendChild(divText);
    parentDiv.appendChild(divElem);

    btnElem.appendChild(btnText);
    parentDiv.appendChild(btnElem);

    
}
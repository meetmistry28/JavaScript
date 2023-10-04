let array = [];
let update = null;

const handleremove = (i) => {
    
   array.splice(i , 1);
   
   display();
}
const handleEdit = (i) => {
    update = i;
    document.getElementById("name").value = array[i];
    
}

const display = () => {
    let ulElem = document.getElementById("disp");

    let liElem = document.createElement("li");
    let liText = document.createTextNode("100");

    liElem.appendChild(liText);
    ulElem.appendChild(liElem);

    

}

const handledetail = () => {
    event.preventDefault();
    let name = document.getElementById("name").value;

    if (update !== null || update == 0) {
        array[update] = name;
    } else {
        array.push(name);
    }
    update = null;
    document.getElementById("name").value = "";

    display();
}
let arr1 = [];

const Remove = () => {
    arr1.slice()
}

const handlSubmit = () => {
    //  console.log("ok"); 
    event.preventDefault()

    let name = document.getElementById("name").value
    // console.log(name);

    let addName = arr1.push(name)
    // console.log(addName);

    if (arr1) {
        let print = "";
        arr1.map((v, i) => {
            print += `<li>${arr1[i]}`
            print += `<button onclick=handleDelete${i}> X </button>`
        });
        document.getElementById("input").innerHTML = print;
    }

    return false;
}


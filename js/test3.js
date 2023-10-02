let arr1 = [];
let update = null

const handleDelete = (i) => {
    arr1.splice(i,1)

    Display()
}

const handleEdit = (i) => {
    update = i;
    document.getElementById("name").value = arr1[i]
}

const Display = () => {

    let print = '<ul>'

    arr1.map((v, i) => { 
        print += `<li>${v}<button onclick=handleEdit(${i})> E </button><button onclick=handleDelete(${i})> X </button></li>`      
    });

    print += '</ul>'
    document.getElementById("input").innerHTML = print 

}

const handlSubmit = () => {
    //  console.log("ok"); 
    event.preventDefault()

   let name = document.getElementById("name").value

    if (update != null || update === 0) {
        console.log("update operation");
        arr1[update] = name
        update = null;

    } else {
        console.log("Add operation");
        arr1.push(name)
    }

    document.getElementById("name").value = " "
    // arr1.push(name)

    Display()

}


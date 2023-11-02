let update = null;

const addStu = () => {
    console.log("hj");
    let roll_no = parseInt(document.getElementById("roll_no").value);
    let name = document.getElementById("name").value;
    let fees = parseInt(document.getElementById("fees").value);

    let obj = {
        roll_no,
        name,
        fees
    };

    console.log(obj);

    if (update) {
        try {
            fetch("http://localhost:3004/Student", {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            })
                .then((response) => {
                    if (response.ok) {
                        displayData()
                    }

                    throw new Error("Someting Went Wrong!!!")
                })
                .catch((error) => console.log(error.massage))
        } catch (error) {

        }
    } else {
        try {
            fetch("http://localhost:3004/Student", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(obj)
            })
                .then((response) => {
                    if (response.ok) {
                        displayData()
                    }

                    throw new Error("Someting Went Wrong!!!")
                })
                .catch((error) => console.log(error.massage))
        } catch (error) {

        }
    }


}

const removeData = (id) => {
    try {
        fetch("http://localhost:3004/Student/" + id, {
            method: 'DELETE'
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("somthing went wrong !!!");
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    } catch (error) {

    }

}

const editData = (v) => {
    let data = JSON.parse(v)
    console.log(data);
    document.getElementById("roll_no").value = data.roll_no;
    document.getElementById("name").value = data.name;
    document.getElementById("fees").value = data.fees;

    update = null;

}

const displayData = () => {
    console.log("jhjsdah");
    try {
        fetch("http://localhost:3004/Student")
            .then((response) => {
                console.log(response.ok);
                if (response.ok) {
                    return response.json()
                }
                throw new Error("Something Went Wrong :( Please Try Again :)");
            })
            .then((data) => {
                console.log(data);
                let print = '<table border="1"><tr><th>Roll No</th><th>Name</th><th>Fees</th><th>Action</th></tr>';

                data.map((v) => {
                    print += `<tr>`
                    print += `<td>${v.roll_no}</td><td>${v.name}</td><td>${v.fees}</td>`
                    // print += `<td><button onclick = "removeData(${v.id})">Delete</botton>
                    // <td><button onclick = editData('${JSON.stringify(v)}')>Edit</botton></td>`
                    print += `</tr>`
                });

                print += '</table>'

                document.getElementById("disp").innerHTML = print;
            })
            .catch((error) => console.log(error.massage))
    } catch (error) {
        console.log(error);
    }
}

window.onload = displayData;
let formRef = document.getElementById("std_form");
formRef.addEventListener("submit", addStu);

const displayData = () => {
    // console.log("ok");

    try {
        fetch("http://localhost:3004/fakeApi")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("something went wrong!")
            })
            .then((data) => {
                // console.log(data);
                let print;

                data.map((v) => {
                    print += `<div id="deco">`
                    print += `<img src="${v.image}" alt="">`
                    print += `<h3>${v.title}</h3>`
                    print += `<p>${v.price}</p>`
                    print += `</div>`
                })
                document.getElementById("disp").innerHTML = print

            })
            .catch((error) => console.log(error))
    } catch (error) {

    }
}

const handleKey = () => {
    // console.log("ok");

    try {
        fetch("http://localhost:3004/fakeApi")

            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("something went wrong")
            })
            .then((data)=>{
                let searchVal=document.getElementById("search").value.toLowerCase();

                let print;

                data.map((v) => {
                    if(v.title.toLowerCase().includes(searchVal)){
                        print += `<div id="deco">`
                        print += `<img src="${v.image}" alt="">`
                        print += `<h3>${v.title}</h3>`
                        print += `<p>${v.price}</p>`
                        print += `</div>`
                    }
                    
                })
                document.getElementById("disp").innerHTML = print
            })
            .catch((error)=>console.log(error))
    } catch (error) {

    }
}

const handlechange = () => {
    // console.log("ok");

    try {
        fetch("http://localhost:3004/fakeApi")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("something went wrong!");
            })
            .then((data) => {
                let selectVal = document.getElementById("select").value;
                let sort = [];

                if (selectVal == 'assending') {
                    sort = data.sort((a, b) => b.title > a.title ? -1 : 1)
                } else if (selectVal == 'dissending') {
                    sort = data.sort((a, b) => b.title < a.title ? -1 : 1)
                } else if (selectVal == 'price_asc') {
                    sort = data.sort((a, b) => a.price - b.price);
                } else if (selectVal == 'price_dsc') {
                    sort = data.sort((a, b) => b.price - a.price);
                }

                let print;

                sort.map((v) => {
                    print += `<div id="deco">`
                    print += `<img src="${v.image}" alt="">`
                    print += `<h3>${v.title}</h3>`
                    print += `<p>${v.price}</p>`
                    print += `</div>`
                })

                document.getElementById("disp").innerHTML=print
            })
            .catch((error)=>console.log(error))
    }catch(error){

    }
    
}

let selectkey = document.getElementById("select")
selectkey.addEventListener("change", handlechange)

let searchkey = document.getElementById("search")
searchkey.addEventListener("keyup", handleKey)

window.onload = displayData;
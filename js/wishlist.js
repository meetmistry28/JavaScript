let data = [
    {
        id: 1,
        name: "laptop",
        price: 70000
    },

    {
        id: 2,
        name: "Tv",
        price: 50000
    },

    {
        id: 3,
        name: "Tablet",
        price: 80000
    },

    {
        id: 4,
        name: "Watch",
        price: 70000
    },
    // console.log("ok")

]

console.log(data);

let Favorites = [];

handliconClick = (iconElem, id) => {
    if (iconElem.classList.contains("far")) {
        iconElem.classList.remove("far");
        iconElem.classList.add("fas");
        addToFavorites(id);
    } else {
        iconElem.classList.remove("fas");
        iconElem.classList.add("far");
        removeFromFavorites(id);
    }

    displayFavorites();
};

addToFavorites = (id) => {
    let product = data.find((item) => item.id === id);
    if (product) {
        Favorites.push(product);
    }
    displayFavorites()
};

removeFromFavorites = (id) => {
    
    let index = Favorites.findIndex((item) => item.id === id);
    if (index !== -1) {
        Favorites.slice((index, 0));
    }
}

displayFavorites = () => {
    let wishlist = document.getElementById("wishlist");
    wishlist.innerHTML = "";

    if (Favorites) {
        let ulElem = document.createElement("ul")

        Favorites.map((item) => {
            
            let liElem = document.createElement("li");

            liElem.textContent = `${item.name} - Price: ${item.price}`;
            ulElem.appendChild(liElem);
            wishlist.appendChild(ulElem);

        });
    }
};

displayData();


function displayData() {
    let prodect = document.getElementById("res");
    prodect.innerHTML = "";

    data.forEach((v) => {
        let prodectDiv = document.createElement("div");
        prodectDiv.className = "box";

        let nameElem = document.createElement("h2");
        nameElem.textContent = (v.name)

        let iconElem = document.createElement("i");
        iconElem.className = "fa-regular fa-heart";

        iconElem.addEventListener("click", () => {
            handliconClick(iconElem, v.id)
        });
        prodectDiv.appendChild(iconElem);

        let priceElem = document.createElement("h4");
        priceElem.textContent = `Price: ${v.price}`

        prodectDiv.appendChild(nameElem);
        prodectDiv.appendChild(priceElem);
        prodect.appendChild(prodectDiv);
    });

}

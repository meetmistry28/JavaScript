let wishList = [];
console.log(wishList);

let product_data = [
    {
        id: 101,
        pro_name: 'Dell Vostro',
        price: '$5000'
    },

    {
        id: 102,
        pro_name: 'Lenovo',
        price: '$5500'
    },

    {
        id: 103,
        pro_name: 'HP pavilion',
        price: '$6500'
    }
]

product_data.map((v, i) => {
    console.log(v);

    let DivRef = document.getElementById('product_disp');


    let divElem = document.createElement('div');
    divElem.setAttribute('class', 'box');

    let wish_but = document.createElement('i');
    wish_but.setAttribute('id', 'heart');
    wish_but.setAttribute('class', 'fa-regular fa-heart');
    wish_but.addEventListener('click', () => handleWishList(wish_but, v.id))

    let id = document.createElement('h3');
    let idTxt = document.createTextNode(v.id);
    id.appendChild(idTxt);

    let proName = document.createElement('h4');
    let proNameTxt = document.createTextNode(v.pro_name);
    proName.appendChild(proNameTxt);

    let price = document.createElement('h4');
    let priceTxt = document.createTextNode(v.price);
    price.appendChild(priceTxt);

    divElem.appendChild(wish_but);
    divElem.appendChild(id);
    divElem.appendChild(proName);
    divElem.appendChild(price);


    DivRef.appendChild(divElem);
})

handleWishList = (wish_but, id) => {

    if (wish_but.classList.contains('fa-regular')) {
        wish_but.classList.add('fa-solid');
        wish_but.classList.remove('fa-regular');
        addData(id);
    } else {
        wish_but.classList.add('fa-regular');
        wish_but.classList.remove('fa-solid');
        removeData(id);
    }

    disp_wishList();
}

addData = (id) => {
    let product = product_data.find((v) => v.id === id);
    console.log(product);

    if (product) {
        wishList.push(product);
        console.log(wishList);
    }

    disp_wishList();
}

removeData = (id) => {
    let index = wishList.findIndex((v) => v.id === id);
    console.log(index);

    wishList.splice(index, 1);

    console.log(wishList);

    disp_wishList();
}

disp_wishList = () => {

    let ulRef = document.getElementById('list');

    ulRef.innerHTML = '';

    wishList.map((v) => {
        console.log(v);

        let li = document.createElement('li');
        li.setAttribute('class','li');
        
        let spanId = document.createElement('span');
        spanId.setAttribute('class','span');
        let idtxt = document.createTextNode(v.id);
        spanId.appendChild(idtxt)

        let spanName = document.createElement('span');
        let proNameTxt = document.createTextNode(v.pro_name);
        spanName.setAttribute('class','span');
        spanName.appendChild(proNameTxt);

        let spanPrice = document.createElement('span');
        let pricetxt = document.createTextNode(v.price);
        spanPrice.setAttribute('class','span');
        spanPrice.appendChild(pricetxt);
        

        li.appendChild(spanId);
        li.appendChild(spanName);
        li.appendChild(spanPrice);

        ulRef.appendChild(li);
    })
}
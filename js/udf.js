function greeting() {
    console.log("Hello Ji");
}
greeting();

function calAge(birthyear) {
    let age = 2023 - birthyear;

    return age;
}

let res = calAge(2003);
console.log(res);

//Arrow function

const greeting1 = (bornyear) => {

    let age1 = 2023 - bornyear;

    return age1;
}

let res1 =  greeting1(2003);
console.log(res1);

let res2 = greeting1(1947);
console.log(res2);


//Nasted Function

const costing = (place) => {
    if (place === 'Goa') {
        return 35000;
    } else if (place === 'Manali') {
        return 90000;
    } else if (place === 'Kerela') {
        return 20000;
    } else if (place === 'Rajesthan') {
        return 60000;
    } 
}


const package = (place) => {
    let cost1 = costing(place);
    
    let msg;
    
    msg = place + ' Costing You ' + cost1 + '.';

    return msg;
}

let res3 = package('Goa');
let res4 = package('Manali');
let res5 = package('Kerela');
let res6 = package('Rajesthan')


console.log(res3);
console.log(res4);
console.log(res5);
console.log(res6);

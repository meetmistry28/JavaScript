// let x = parseInt(prompt("Enter Value Of X : "));
// let y = parseInt(prompt("Enter Value Of Y : "));

// let op = prompt("ENTER OPERATOR");
// // console.log(x,y,op);

// let ans;

// switch (op) {
//     case '+':
//         ans = x + y;
//         break;

//     case '-':
//         ans = x - y;
//         break

//     case '*':
//         ans = x * y;
//         break
    
//     case '/':
//         ans = x / y;
//         break
// }

// console.log(ans);

function handelsubmit() {
    // console.log("ok");
    let r = parseFloat(document.getElementById("radius").value);

    let area;

    area = 3.14 * r * r;

    console.log("Area Of circle is: ",area); 

}
let a = parseInt(prompt("Please Enter Value Of A: "));
let b = parseInt(prompt("Please Enter Value Of B: "));

try {
    if (b === 0) {
        throw new Error ("Divided By Zero Is Not Posible!");
     } else {
        let ans = a/b;
        console.log(ans);
        document.getElementById("res").innerHTML = ans;
     }
} catch (error) {
    console.log(error.message);
    document.getElementById("res").innerHTML = error.message;
} finally {
    console.log("Always Run");
}

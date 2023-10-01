let n1 = Math.floor(Math.random() * 100);
let n2 = Math.floor(Math.random() * 10);

document.getElementById("num1").innerHTML = n1;
document.getElementById("num2").innerHTML = n2;

let correctAns = n1 + n2;

let AnsE = true

// console.log(n1, n2, correctAns);

function handlSubmit() {
    // console.log("ok");    
    
   let userAns =  parseInt(document.getElementById("ans").value);
   
    if (userAns) {
        // console.log("y");
        if (correctAns == userAns) {
            alert("correct Ans")
        } else {
            alert("Invalid Ans. Correct Ans Is:" + correctAns);
        }
    } else {
        document.getElementById("ansErr").innerHTML = "Please Enter Ans"
    }
    



    // if (correctAns == userAns) {
    //     alert("correct Ans")
    // } else {
    //     alert("Invalid Ans. Correct Ans Is:" + correctAns);
    // }

}
function handlMouse() {
    console.log("mouse over");
}

function handlMouseout() {
    console.log("mouse out");
}

function handlKyedown() {
    // console.log("Key down");

    document.getElementById("text").value
    console.log("key down");
}

function handlKyepress() {
    document.getElementById("text1").value
    console.log("Key Press");
}


function handlKyeup() {
    document.getElementById("text2").value
    console.log("Key up");

}

function handlLoad() {
    console.log("Load");
}

function handlBlur() {
    console.log("Blur");

    alert("BLUR Event");
}


const element = document.querySelector("div#scroll-box");
const output = document.querySelector("p#output");

element.addEventListener("scroll", (event1) => {
    output.innerHTML = "Scroll event fired!";
    setTimeout(() => {
        output.innerHTML = "Waiting on scroll events...";
    }, 1000);
});

console.log(event1);


// function handlMouse() {
//     console.log("mouse over");
// }

// function handlMouseout() {
//     console.log("mouse out");
// }

// function handlKyedown() {
//     // console.log("Key down");

//     document.getElementById("text").value
//     console.log("key down");
// }

// function handlKyepress() {
//     document.getElementById("text1").value
//     console.log("Key Press");
// }


// function handlKyeup() {
//     document.getElementById("text2").value
//     console.log("Key up");

// }

// function handlLoad() {
//     console.log("Load");
// }

// function handlBlur() {
//     console.log("Blur");

//     alert("BLUR Event");
// }


// const element = document.querySelector("div#scroll-box");
// const output = document.querySelector("p#output");

// element.addEventListener("scroll", (event1) => {
//     output.innerHTML = "Scroll event fired!";
//     setTimeout(() => {
//         output.innerHTML = "Waiting on scroll events...";
//     }, 1000);
// });

// console.log(event1);

function handlClick() {
    console.log("handlClick");
}

function handlMouseOver() {
    console.log("handlMouseOver");
}

function handlMouseOut() {
    console.log("handlMouseOut");
}

function handlMouseDown() {
    console.log("handlMouseDown");
}

function handleMouseUp() {
    console.log("handleMouseUp");
}

function handlKeyDown() {

    
    let name = document.getElementById("name").value;

    console.log(name);
}

function handlKeyUp() {

    
    let name1 = document.getElementById("name1").value;

    console.log(name1);
}

function handlFocus() {

    document.getElementById("name1").style.backgroundColor = 'skyblue'

    console.log("handlFocus");
}

function handlBlur() {
    document.getElementById("name1").style.backgroundColor = 'white'

    console.log("handlBlur");
}

window.onload = function() {
    alert("Web Page Restart");
    console.log("onload");
}

window.onunload = function() {
    console.log("Clean");
}

window.onresize = function() {
    console.log("Page REsize");
}
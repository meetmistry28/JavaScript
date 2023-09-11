function handlSubmit() {
    event.preventDefault();
    // console.log("Done");

    let P = parseFloat(document.getElementById("P").value);
    let r = parseFloat(document.getElementById("r").value);
    let time = parseFloat(document.getElementById("time").value);
    let select = document.getElementById("select").value;

    // console.log(P,r,time,select);
    
    let ans;

    // total = P * r * time/

    if (select === 'y') {
        ans = (P * r * time)/100;
    } else if (select === 'm') {
        ans = (P * r * time)/1200
    }

    // total = P * r * time 

    document.getElementById("total").innerHTML = ans

    console.log(ans);
    
    
}
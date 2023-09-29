function humenbmi() {

    event.preventDefault();

    let w = parseFloat(document.getElementById("weghit").value);
    let h = parseFloat(document.getElementById("heghit").value);

    let cm = h / 100;

    let bmical = w / (cm * cm);
    let anser = bmical;

    let heightE = true;
    let weghitE = true;



    if (w > 0 && w < 450) {
        document.getElementById("weghitErr").innerHTML = ""
        weghitE = false
    } else {
        document.getElementById("weghitErr").innerHTML = "Please enter weghit and checked input"
    }

    if (h > 30 && h < 300) {
        document.getElementById("HeightError").innerHTML = ""
        heightE = false
    } else {
        document.getElementById("HeightError").innerHTML = "please enter height and input checked"
    }


    if (anser) {
        document.getElementById("bmianser").innerHTML = anser;
    } else {
        document.getElementById("bmianser").innerHTML = '';

    }

    // console.log(Math.floor(anser));


    if (weghitE || heightE) {
        return false
    } else {
        if (anser > 17 && anser < 18.5) {
            document.getElementById("anser").innerHTML = 'bade';
        } else if (anser > 18.5 && anser < 25) {
            document.getElementById("anser").innerHTML = 'normal';
        } else if (anser > 25 && anser < 30) {
            document.getElementById("anser").innerHTML = 'overweghit';
        } else {
            document.getElementById("anser").innerHTML = 'sever';
        }
        return true
    }

    // return false
}
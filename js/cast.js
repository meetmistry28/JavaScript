function handelSubmit() {
    // console.log("hello");

    let cast = document.getElementById("cast").value;
    console.log("CAST:",cast);

    let CGPA = document.getElementById("CGPA").value;

    console.log("CGPA",CGPA);

    let fees = document.getElementById("fees").value;
    // console.log(fees);

    let grad

    if (CGPA > 9 && CGPA <= 100) {
        grad = "A";
    } else if (CGPA >= 8.5) {
        grad = "B";
    } else if (CGPA >= 8) {
        grad = "C";
    } else if (CGPA >= 7.5) {
        grad = "D";
    } 

    console.log("Grad: ",grad);

    let scoler

    if (grad == "A" || grad == "B") {
        if (cast == 'o' ) {
            scoler = fees * 0;
        } else if (cast == 'ob' ){
            scoler = fees *25;
        } else if (cast == 'sc' )  {
            scoler = fees * 50;
        } else if (cast == 'st' ) {
            scoler = fees * 100;
        }
    } 

    console.log("scolarship is : ",scoler);
}
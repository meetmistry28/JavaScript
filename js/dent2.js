let tc_s=1, tc_c=500;
let fl_s=2, fl_c=1500;
let rct_s=4, rct_c=2500;
let rct_c_s=6, rct_c_c=12000;
let br_s=12, br_c=35000;

let final_se, final_co, final_tr;

const displayTreatment = (t, s, c) => {
    document.getElementById("tre").innerHTML = t;
    document.getElementById("seating").innerHTML = s;
    document.getElementById("costing").innerHTML = c;

    final_se=s; 
    final_co=c;
    final_tr=t;
}

const handleTreatment = () => {
    let val = document.getElementById("treatment").value;

    if (val === 'tc') {
        displayTreatment("Teeth Cleaning", tc_s, tc_c);
    } else if (val === 'fl') {
        displayTreatment("Filling", fl_s, fl_c);
    } else if (val === 'rct') {
        displayTreatment("Root Canal Treatment", rct_s, rct_c);
    } else if (val === 'rct_cover') {
        displayTreatment("RCT + Cover", rct_c_s, rct_c_c);
    } else if (val === 'br') {
        displayTreatment("Braces", br_s, br_c);
    }

    document.getElementById("disp").style.display = 'block';
}

const appDate = () => {
    let d = document.getElementById("apt-date").value;

    let per_co = final_co / final_se;

    let dateAp = new Date(d);

    let print = '';

    print += '<table border="1"><tr><th>Treatment</th><th>Seating</th><th>Costing</th></tr>';

    for (let i=1; i<=final_se; i++) {
        if (i === 1) {
            print += '<tr>';
            print += '<td>' + i + '</td>';
            print += '<td>' + dateAp.toLocaleDateString() + '</td>';
            print += '<td>' + per_co + '</td>';
            print += '</tr>';
            // console.log(i, per_co, dateAp.toLocaleDateString());
        } else {
            dateAp.setDate(dateAp.getDate() + 7);
            print += '<tr>';
            print += '<td>' + i + '</td>';
            print += '<td>' + dateAp.toLocaleDateString() + '</td>';
            print += '<td>' + per_co + '</td>';
            print += '</tr>';
            // console.log(i, per_co, dateAp.toLocaleDateString());
        }
    }

    
    print += '</table>';

    document.getElementById("tr-plan").innerHTML = print;

    console.log(print);

    document.getElementById("tr-plan").style.display = 'block';
}

let bookRef = document.getElementById("book");

bookRef.addEventListener("click", appDate)
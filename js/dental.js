// function handlTreatment() {
//     console.log("ok");
// }

const TC_s = 1, TC_c = 500;
const F_s = 2, F_c = 1500;
const RCT_s = 4, RCT_c = 2500;
const RCT_C_s = 6, RCT_C_c = 12000;
const BI_s = 12, BI_c = 35000;

let tr_name, tr_s = 0, tr_c = 0;



const handlTreatment = () => {
    // console.log("ok");

    let Treatment = document.getElementById("Treatment").value;
    // console.log(Treatment);



    if (Treatment === 'TC') {
        tr_name = 'Teeth Cleanings'
        tr_s = TC_s;
        tr_c = TC_c;

    } else if (Treatment === 'F') {
        tr_name = 'Fillings'
        tr_s = F_s;
        tr_c = F_c;

    } else if (Treatment === 'RCT') {
        tr_name = 'Root Canal Treatment'
        tr_s = RCT_s;
        tr_c = RCT_c;
    } else if (Treatment === 'RCT_C') {
        tr_name = 'RCT + Cover'
        tr_s = RCT_C_s;
        tr_c = RCT_C_c;
    } else if (Treatment === 'BI') {
        tr_name = 'Braces/invisaling'
        tr_s = BI_s;
        tr_c = BI_c;
    }

    document.getElementById("tre").innerHTML = tr_name;
    document.getElementById("seating").innerHTML = tr_s;
    document.getElementById("costing").innerHTML = tr_c;

    // console.log(tr_name, tr_s, tr_c);

    document.getElementById("Disp").style.display = 'block';



}

const handlClickApt = () => {

    let aptDate = document.getElementById("apt-date").value;

    let d = new Date(aptDate)

    let costing1 = tr_c/tr_s

    let print = ''


    print += "<table border='1'><tr><th>Treatment</th><th>Seating</th><th>Costing</th></tr>"



    for (let i = 0; i < tr_s; i++) {

        print = print + '<tr>'

        print = print + '<td>'
        print = print + tr_name;
        print = print + '</td>'

        print = print + '<td>'
        print = print + d.toLocaleDateString(d.getDate() + 7);
        print = print + '</td>'

        print = print + '<td>'
        print = print + costing1
        print = print + '</td>' 

        print = print + '</tr>'

        console.log(print);
        // console.log(d.getDate());

        d.setDate(d.getDate() + 7);
        
    }

    document.getElementById("display").innerHTML = print;

}

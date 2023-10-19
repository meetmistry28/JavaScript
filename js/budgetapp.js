class Budget {
    constructor() {
        this.getbudget = document.querySelector("#budget");

        this.show_budget = document.querySelector("#ff1");
        this.show_expence = document.querySelector("#ff2");
        this.show_total = document.querySelector("#ff3");

    }

    handlBudget() {
        event.preventDefault();

        let budget = parseInt(tgis.getbudget.value);
        console.log(show_budget);

        if (budget < 0 || budget === '' || isNaN(budget)) {
            document.getElementById("error1").innerHTML = 'Please Enter Budget'
        } else {
            document.getElementById("error1").innerHTML = ""

            this.show_budget.innerHTML = budget;
            this.displaydata();
            this.displaylist()
        }

    }


    displaydata() {
        // event.preventDefault();

        let localbudget = JSON.parse(localStorage.getItem("budget"));
        console.log(localbudget);

        let localexpense = JSON.parse(localStorage.getItem("exp_list"));
        console.log(localexpense);

        let localtotal = JSON.parse(localStorage.getItem("balane"));
        console.log(localtotal);

        if (localbudget != 0 && localbudget != null) {
            console.log(localbudget);
            let reduse;

            if (localexpense) {
                reduse = localexpense.reduse((acc, v) => acc + v.expence_amt, 0)
            } else {
                reduse = 0;
            }

            console.log(reduse);
            this.show_budget.innerHTML = localbudget;
            this.show_expence.innerHTML = reduse;
            this.show_total.innerHTML = localtotal - reduse;
        } else {
            let budgetvalue = parseInt(this.budget.textContent);
            console.log(budgetvalue);
            localStorage.setItem("budget", JSON.stringify(budgetvalue))

            let exptamtvalue = parseInt(this.show_expence.textContent);
            console.log(exptamtvalue);
            localStorage.setItem("budget", JSON.stringify(exptamtvalue))

            let total = budgetvalue - exptamtvalue;

            console.log(total);
            localStorage.setItem("balance", JSON.stringify(total));
            this.show_total.innerHTML = total;

        }
    }
}

class Expense extends Budget {
    constructor() {
        super();

        this.getexpense = document.querySelector("#expence");
        this.getexp_amt = document.querySelector("#expenceamount");
    }

    handlExpense() {
        event.preventDefault();

        let expence = this.getexpense.value;

        let expence_amt = parseInt(this.getexp_amt.value);

        let id = Math.floor(Math.random() * 1000)

        let expencecheck = true;
        let exp_amtcheck = true;

        if (expence) {
            if (expence == 'number') {
                document.getElementById("error2").innerHTML = 'Please Enter Valid Expense Name'
            } else {
                document.getElementById("error2").innerHTML = ''
                expencecheck = false;
            }
        } else {
            document.getElementById("error2").innerHTML = 'Please Enter Expense Name'
        }

        if (expence_amt) {
            if (expence_amt < 0) {
                document.getElementById("error3").innerHTML = 'Please Enter Valid Expense';
            } else {
                document.getElementById("error3").innerHTML = '';
                exp_amtcheck = false;

                this.show_expence.innerHTML = expence_amt;

            }
        } else {
            document.getElementById("error3").innerHTML = 'Please Enter Expense'
        }

        if (expencecheck == false && exp_amtcheck == false) {
            let exp_list = JSON.parse(localStorage.getItem("exp_list"));
            console.log(exp_list);
        } else {
            if (exp_list) {
                exp_list.push({ id: id, exp_name, expence_amt: parseInt(expence_amt) });
                localStorage.setItem('exp_list', JSON.stringify(exp_list));
            } else {
                localStorage.setItem("exp_list", JSON.stringify([{ id: id, exp_name: expence, expence_amt: parseInt(expence_amt) }]));
            }
            this.displaydata()
        }
        this.displaylist()
    }

    displaylist() {
        let exp_list = JSON.parse(localStorage.getItem("exp_list"));

        if (exp_list) {
            let ulEle = document.getElementById("ul-list");

            ulEle = ''

            exp_list.map((v) => {

                let liEle = document.createElement("li");

                let spanTxtElem = document.createElement("span");
                let spanTxt = document.createTextNode(v.exp_name);

                let spanAmtElem = document.createElement("span");
                let spanAmt = document.createTextNode(v.expence_amt);

                let btnEdit = document.createElement("button");
                let btnEditTxt = document.createTextNode("Edit");

                let btnDelete = document.createElement("button");
                let btnDeleteTxt = document.createTextNode("Delete");

                spanTxtElem.appendChild(spanTxt);
                spanAmtElem.appendChild(spanAmt);
                btnEdit.appendChild(btnDeleteTxt);
                btnDelete.appendChild(btnDeleteTxt);

                liEle.appendChild(spanTxtElem);
                liEle.appendChild(spanAmtElem);
                liEle.appendChild(btnEdit);
                liEle.appendChild(btnDelete);

                ulEle.appendChild(liEle);
            });
        }
    }
}

let e = new Expense()

e.displaydata();
e.displaylist();


let budgetref = document.getElementById("budgetform");

budgetref.addEventListener("submit", function () {
    e.handlBudget();
});


let expenseref = document.getElementById("expform");

expenseref.addEventListener("submit", function () {
    e.handlExpense();
});

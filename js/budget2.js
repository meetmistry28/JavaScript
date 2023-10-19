class Budget {
    constructor() {
        this.budgetInput = document.querySelector("#BudgetAmount");
        this.FinalBudget = document.querySelector("#BudgetAM");
        this.ExpenseBalance = document.querySelector("#ExpenseAM");
        this.FinalBalance = document.querySelector("#BalanceAM");

        this.ArrData = [];

        this.budgetDisplayData();
    }

    BudgetForm() {
        event.preventDefault();
        let BAmount = parseInt(this.budgetInput.value);
        if (BAmount <= 0 || isNaN(BAmount)) {
            document.getElementById("Error").innerHTML =
                "Please Enter a Valid Budget!";
        } else {
            document.getElementById("Error").innerHTML = "";
            this.FinalBudget.innerHTML = BAmount;
            this.budgetDisplayData();
        }
    }
    
    budgetDisplayData() {
        let localbudget = localStorage.getItem("budget");
        let localexpense = JSON.parse(localStorage.getItem("expense"));
        let localbalance = localStorage.getItem("balance");

        if (localbudget !== null && localbudget !== 0) {
            let expenseAmt;
            if (localexpense) {
                expenseAmt = localexpense.reduce((acc, expense) => acc + parseFloat(expense.exAmount), 0);
            } else {
                expenseAmt = 0;
            }

            let balanceValue = localbudget - expenseAmt;
            this.FinalBudget.innerHTML = localbudget;
            this.ExpenseBalance.innerHTML = expenseAmt;
            this.FinalBalance.innerHTML = balanceValue;
        } else {
            let budgetValue = parseInt(this.FinalBudget.textContent);
            localStorage.setItem("budget", JSON.stringify(budgetValue));

            let expenseValue = this.ArrData.reduce((acc, v) => acc + v.ExAmount, 0);
            localStorage.setItem("expense", JSON.stringify(expenseValue));

            let balanceValue = budgetValue - expenseValue;
            localStorage.setItem("balance", JSON.stringify(balanceValue));

            this.FinalBudget.innerHTML = budgetValue;
            this.ExpenseBalance.innerHTML = expenseValue;
            this.FinalBalance.innerHTML = balanceValue;
        }
    }
}

class Expense extends Budget {
    constructor() {
        super();
        this.expValueInput = document.querySelector("#ExpenseValue");
        this.expAmoInput = document.querySelector("#ExpenseAmount");
        this.updetIndex = null;
    }
    ExpenseForm() {
        event.preventDefault();
        let expenseval = this.expValueInput.value;
        let exAmountval = this.expAmoInput.value;

        let expensevalE = true;
        let exAmountvalE = true;

        if (expenseval === "") {
            document.getElementById("ErrorEx").innerHTML =
                "Please Enter a Valid Value!";
        } else {
            document.getElementById("ErrorEx").innerHTML = "";
            expensevalE = false;
            this.expValueInput.innerHTML = expenseval;
        }

        if (exAmountval <= 0 || exAmountval === "") {
            document.getElementById("ErrorEx1").innerHTML =
                "Please Enter a Valid Expense!";
        } else {
            document.getElementById("ErrorEx1").innerHTML = "";
            exAmountvalE = false;
            this.expAmoInput.innerHTML = exAmountval;
        }

        if (!expensevalE && !exAmountvalE) {
            let localEx = JSON.parse(localStorage.getItem("exp_amt")) || [];
            localEx.push({ value: expenseval, exAmount: parseInt(exAmountval) });
            localStorage.setItem("expense", JSON.stringify(localEx));
        } else {
            localStorage.setItem("expense", JSON.stringify({ value: expenseval, exAmount: parseInt(exAmountval) }));
        }
        this.budgetDisplayData();
        this.DisplayExpense();
    }
}

//e.DisplayExpense();
let e = new Expense();


let BudgetRef = document.getElementById("BudgetForm");
BudgetRef.addEventListener("submit", function () {
  e.BudgetForm();
});

let ExpenseRef = document.getElementById("ExpenseForm");
ExpenseRef.addEventListener("submit", function () {
  e.ExpenseForm();
});
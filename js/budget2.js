class Budget {
    constructor() {
      this.budgetInput = document.querySelector("#BudgetAmount");
      this.FinalBudget = document.querySelector("#BudgetAM");
      this.ExpenseBalance = document.querySelector("#ExpenseAM");
      this.FinalBalance = document.querySelector("#BalanceAM");
  
  
    }
  
    BudgetForm() {
      event.preventDefault();
      let BAmount = parseInt(this.budgetInput.value);
      if (BAmount <= 0 || isNaN(BAmount)) {
        document.getElementById("Error").innerHTML =
          "Please Enter a Val  id Budget!";
      } else {
        document.getElementById("Error").innerHTML = "";
        this.FinalBudget.innerHTML = BAmount;
        this.budgetDisplayData();
      }
    }
    budgetDisplayData() {
      let localbudget = localStorage.getItem("budget");
      let localexpense = JSON.parse(localStorage.getItem("exp_list"));
      let localbalance = localStorage.getItem("balance");
  
      if (localbudget != 0 && localbudget !== null) {
        let expenseAmt;
        if (localexpense) {
          expenseAmt = localexpense.reduce(
            (acc, expense) => acc + parseFloat(expense.exAmount),
            0
          );
        } else {
          expenseAmt = 0;
        }
  
        this.FinalBudget.innerHTML = localbudget;
        this.ExpenseBalance.innerHTML = expenseAmt;
        this.FinalBalance.innerHTML = parseInt(localbalance) - expenseAmt;
      } else {
        let budgetValue = parseInt(this.FinalBudget.textContent);
        localStorage.setItem("budget", JSON.stringify(budgetValue));
  
        let expenseValue = parseInt(this.ExpenseBalance.textContent);
  
        localStorage.setItem("expense", JSON.stringify(expenseValue));
  
        let balanceValue = budgetValue - expenseValue;
        localStorage.setItem("balance", JSON.stringify(balanceValue));
  
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
      let exAmountval = parseInt(this.expAmoInput.value);
  
      let expensevalE = true;
      let exAmountvalE = true;
  
      if (expenseval === "") {
        document.getElementById("ErrorEx").innerHTML =
          "Please Enter a Valid Value!";
      } else {
        document.getElementById("ErrorEx").innerHTML = "";
        expensevalE = false;
        //this.expValueInput.innerHTML = expenseval;
      }
  
      if (exAmountval <= 0 || exAmountval === "") {
        document.getElementById("ErrorEx1").innerHTML =
          "Please Enter a Valid Expense!";
      } else {
        document.getElementById("ErrorEx1").innerHTML = "";
        exAmountvalE = false;
        //this.expAmoInput.innerHTML = exAmountval;
      }
  
      if (!expensevalE && !exAmountvalE) {
        if (this.updetIndex) {
          console.log("update task");
          let locaData = JSON.parse(localStorage.getItem("exp_list"));
          let index = locaData.findIndex((v) => v.id === this.updetIndex);
          locaData[index] = {
            id: this.updetIndex,
            value: expenseval,
            exAmount: parseInt(exAmountval),
          };
          localStorage.setItem("exp_list", JSON.stringify(locaData));
        } else {
          let localEx = JSON.parse(localStorage.getItem("exp_list"));
  
          let id = Math.floor(Math.random() * 1000);
  
          if (localEx) {
            localEx.push({
              id: id,
              value: expenseval,
              exAmount: parseInt(exAmountval),
            });
            localStorage.setItem("exp_list", JSON.stringify(localEx));
          } else {
            localStorage.setItem(
              "exp_list",
              JSON.stringify([
                { id: id, value: expenseval, exAmount: parseInt(exAmountval) },
              ])
            );
          }
        }
        this.budgetDisplayData();
        this.DisplayExpense();
        this.updetIndex = null;
        this.expValueInput.value = "";
        this.expAmoInput.value = "";
        //window.location.reload();
      }
    }
  
    DisplayExpense() {
      let localEx = JSON.parse(localStorage.getItem("exp_list"));
      // console.log(localEx);
      if (localEx) {
        let ulRef = document.getElementById("exp-list");
        ulRef.innerHTML = "";
  
        localEx.map((v) => {
          let liElem = document.createElement("li");
  
          let spanNameElem = document.createElement("span");
          let spanNameText = document.createTextNode(v.value);
          spanNameElem.appendChild(spanNameText);
  
          let spanAmtElem = document.createElement("span");
          let spanAmtText = document.createTextNode(v.exAmount);
          spanAmtElem.appendChild(spanAmtText);
  
          let btnE = document.createElement("button");
          btnE.addEventListener("click", () => this.handleEdit(v));
          let btnTextE = document.createTextNode("EDIT");
          btnE.appendChild(btnTextE);
  
          let btnD = document.createElement("button");
          btnD.addEventListener("click", () => this.handleDelete(v.id));
  
          let btnTextD = document.createTextNode("DELETE");
          btnD.appendChild(btnTextD);
  
          liElem.appendChild(spanNameElem);
          liElem.appendChild(spanAmtElem);
          liElem.appendChild(btnE);
          liElem.appendChild(btnD);
  
          ulRef.appendChild(liElem);
        });
      }
    }
  
    handleDelete(id) {
      let locaData = JSON.parse(localStorage.getItem("exp_list"));
      let fData = locaData.filter((v) => v.id !== id);
      localStorage.setItem("exp_list", JSON.stringify(fData));
  
      this.DisplayExpense();
      this.budgetDisplayData();
    }
    handleEdit(data) {
      console.log(data);
  
      this.expValueInput.value = data.value;
      this.expAmoInput.value = data.exAmount;
      this.updetIndex = data.id;
    }
  }
  
  let e = new Expense();
  e.budgetDisplayData();
  e.DisplayExpense();
  
  let BudgetRef = document.getElementById("BudgetForm");
  BudgetRef.addEventListener("submit", function () {
    e.BudgetForm();
  });
  
  let ExpenseRef = document.getElementById("ExpenseForm");
  ExpenseRef.addEventListener("submit", function () {
    e.ExpenseForm();
  });
  
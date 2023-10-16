class Budget {
  constructor() {
      this.budgetInput = document.querySelector("#budget_input");
      this.ExpenseName = document.querySelector("#expense_name");
      this.expensesInput = document.querySelector("#expensesInput");

      this.budget = document.querySelector("#budget_value");
      this.expenses = document.querySelector("#Expenses_value");
      this.balance = document.querySelector("#balance_value");

      this.ExpensesData = [];
      this.updateindex = null;


  }

  handleBudget() {
      // console.log("handleBudget");

      let budget = parseInt(this.budgetInput.value);
      // console.log(budget);

      if (budget < 0) {
          document.getElementById("budgetErr").innerHTML = 'Please Enter Valid Budget';
      } else {
          document.getElementById("budgetErr").innerHTML = '';

          this.budget.innerHTML = budget;
          this.handleDisplay();
      }
      event.preventDefault();
  }

  handleExpenses() {
      // console.log("handleExpenses");

      if (this.ExpenseName.value === '') {
          document.getElementById("expense_nameErr").innerHTML = 'Please Enter Expenses';
      } else {
          document.getElementById("expense_nameErr").innerHTML = '';
      }

      if (this.expensesInput.value < 0 || this.expensesInput.value === '') {
          document.getElementById("expenseErr").innerHTML = 'Please Enter Valid Expenses Value';
      } else {
          document.getElementById("expenseErr").innerHTML = '';
      }
      event.preventDefault()
  }


  ExpenseDisplay(id) {


      let pdiv = document.getElementById("expenselist");
      let divElem = document.createElement("div")
      divElem.setAttribute("class", "d-flex justify-content-between");
      // let i = document.getElementById("record-", +id);
      divElem.setAttribute("id", "record-" + id);

      let p1 = document.createElement("p");
      p1.setAttribute("class", "list-item");

      let p1taxt = document.createTextNode(this.ExpenseName.value);
      p1.appendChild(p1taxt);

      divElem.appendChild(p1);


      let p2 = document.createElement("p");
      p2.setAttribute("class", "list-item");

      let p2taxt = document.createTextNode(this.expensesInput.value);
      p2.appendChild(p2taxt);

      divElem.appendChild(p2);


      let p3 = document.createElement("p");
      p3.setAttribute("class", "list-item");

      let DA1 = document.createElement("a");
      DA1.setAttribute("href", "#");

      let DI1 = document.createElement("i");
      DI1.setAttribute("class", "fa-solid fa-pen-to-square edit_css");
      DA1.addEventListener("click", () => this.handleEdit(id));

      p3.appendChild(DA1);
      DA1.appendChild(DI1);


      let DA = document.createElement("a");
      DA.setAttribute("href", "#");

      let DI = document.createElement("i");
      DI.setAttribute("class", "fa-solid fa-trash")

      DA.addEventListener("click", () => this.handleremove(id));

      p3.appendChild(DA);
      DA.appendChild(DI);




      divElem.appendChild(p3);

      pdiv.appendChild(divElem)

  }

  handleDisplay() {

      let budgetVal = parseInt(this.budget.textContent);

      let balanceVal = 0;
      let expensesVal = 100
      0
      balanceVal = budgetVal - expensesVal;

      this.balance.innerHTML = balanceVal;



  }
}

let b = new Budget();

let submitform = document.getElementById("submit_form");
submitform.addEventListener("submit", function () {
  b.handleBudget();
});

let expensesform = document.getElementById("expenses_form");
expensesform.addEventListener("submit", function () {
  b.handleExpenses();
});
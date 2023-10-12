// class employee {
//     id;
//     name;
//     salary;

//     constructor(i,n,s) {
//         this.is = i;
//         this.name = n;
//         this.salary = s;
//     }

//     getAllInfo = () => {
//         console.log(this.id , this.name , this.salary);
//     }
// }

// class bouns extends employee {
//     bounsAmt;
//     Per;

//     constructor(id,name,salary,per) {
//         super(id,name,salary,per)

//         this.per = per
//     }

//     calculatBouns = () => {
//         let b = this.salary * this.Per;
//         console.log("Your Bouns Is:",b);
//     }
// }

// let b1 = new bouns (102,'dhruvil',40000,0.10 )

// b1.getAllInfo()
// b1.calculatBouns()


// // e1.getAllInfo()


// class computer {
//     name;
//     price = 70000;
//     company;

//     constructor (name,company) {
//         this.name = name;
//         this.company = company
//     }
//     basic_detail = () => {
//         console.log("computer name is: ",this.name);
//         console.log("computer Company is: ",this.company);
//         console.log("computer price is:" ,this.price);
//     }
// }
// class processor extends computer {
//     proname;
//     version;

//     constructor (name,company,proname,version) {
//         super(name,company)
//         this.proname = proname;
//         this.version = version;

//     }
//     allDedail = () => {
//         console.log("computer Company is: ",this.company);
//         console.log("computer name is: ",this.name);
//         console.log("computer price is:" ,this.price);
//         console.log("processor Is:",this.proname);
//         console.log("version is",this.version);
//     }
// }
// let c1 = new processor('pavilion','hp','i5','13th');
// // console.log(detail);

// c1.allDedail()

// class Car {
//     model_name;
//     company;
//     man_year = 2020;
//     price = 2500000;

//     constructor(model_name, company) {
//         this.model_name = model_name;
//         this.company = company
//     }

//     displayInfo = () => {
//         console.log("Your Model Name:", this.model_name);
//         console.log("Your Company Name Is:", this.company);
//         console.log("Your Manufacturing Year", this.man_year);
//         console.log("Your Price:", this.price);
//     }
// }



// class Model extends Car {
//     name;
//     expiry;

//     constructor(model_name, company, name, expiry) {
//         super(model_name, company)
//         this.name = name;
//         this.expiry = expiry;
//     }

//     alldisplayInfo = () => {
//         this.displayInfo()
//         console.log("Your Name Is:", this.name);
//         console.log("Your Expiry Year:", this.expiry);
//     }
// }


// let m1 = new Model('charger', 'dodge', 'meet', 2045)
// m1.alldisplayInfo();
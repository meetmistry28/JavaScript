class Student {
    id;
    name;
    #fees;

    constructor(i,n,f) {
        this.id = i;
        this.name = n;
        this.#fees = f;
    }

    displayInfo () {
        console.log(this.id,this.name);
    }


    #displayFees () {
        console.log(this.#fees);
    }
    

    displayAll () {
        this.displayInfo()
        this.#displayFees()   
    }
}

// let s1 = new student(101,'meet',70000)

// s1.displayAll()

class Cource extends Student {
    cource_name;
    duration;
    #scholership;

    constructor (i,n,f,c,d) {
        super(i,n,f);
        this.cource_name = c;
        this.duration = d;
    }

    setSutudentInfo() {
        this.displayAll();
        console.log(this.cource_name,this.duration);
    }

    //setter method :-  Using Setter Method we can set privet data out side if the class
    

    set scholership (s) {
        this.#scholership = s;
    }

    get scholership () {
        console.log(this.#scholership);
    }
}

let c1 = new Cource(101,'meet',70000,'Full Stack','13 Months');
c1.scholership = 17000;  //setter call
c1.setSutudentInfo()
c1.scholership;          //getter call
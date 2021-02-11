// function borrowing

let printFullName = function (state, country) {
    console.log(this.firstName + " " + this.lastName + ", from " + state + ", " + country);
}

class Name {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let name1 = new Name("foo1" , "bar2");
let name2 = new Name("foo2" , "bar2");

printFullName.call(name1, "Ohio", "USA");
printFullName.call(name2, "Illinois", "USA");

printFullName.apply(name1, ["Ohio", "USA"]);
printFullName.apply(name2, ["Illinois", "USA"]);

let boundMethod1 = printFullName.bind(name1, "Ohio", "USA");
let boundMethod2 = printFullName.bind(name2, "Illinois", "USA");
boundMethod1();
boundMethod2();
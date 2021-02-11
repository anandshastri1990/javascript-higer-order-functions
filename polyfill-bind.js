
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

Function.prototype.myBind = function (...args) {
    let object = args[0];
    object.function = this;
    return () => object.function(...args.splice(1, args.length));

}

printFullName.myBind(name1, "Ohio", "USA")();
printFullName.myBind(name2, "Illinois", "USA")();
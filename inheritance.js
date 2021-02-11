//Inheriting function with constructor
let ParentFunction = function (name, age) {
    this.name = name;
    this.age = age;
    this.message = function () {
        if (this.age > 50) {
            console.log("Message from Parent: You are young at heart!");
        } else {
            console.log("Message from Parent: You are young!");
        }
    };
    this.overriddenMessage = function () {
        console.log("this message should have been overridden by child message");
    }
}

let ChildFunction = function (name, age, gender) {
    ParentFunction.call(this, name, age);
    this.gender = gender;
    this.getGender = function () {
        console.log("Message from Child: " + this.gender);
    };
    this.overriddenMessage = function () {
        console.log("child function overrode the parent function");
    }
}

ParentFunction.prototype.specialFunction = function () {
    console.log("Message from Special function attached to the parent's prototype: " + this.name);
}

ChildFunction.prototype = Object.create(ParentFunction.prototype);
Object.defineProperty(ChildFunction.prototype, 'constructor', {
    value: ChildFunction,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
})

let childInstance = new ChildFunction("Foobar", 30, "Male");
childInstance.message();
childInstance.getGender();
childInstance.specialFunction();
childInstance.overriddenMessage();

console.log(Object.getOwnPropertyNames(ParentFunction.prototype));
console.log(Object.getOwnPropertyNames(ChildFunction.prototype));

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Inheriting function with no constructor

let ParentFunctionWithNoConstructor = function () {
    this.message = () => {
        console.log("standard message");
    }
}
ParentFunctionWithNoConstructor.prototype.specialFunction = function () {
    console.log("Message from Special function attached to the parent's prototype");
}

let ChildFunction2 = function (name) {
    ParentFunctionWithNoConstructor.call(this);
    this.name = name;
    this.getName = () => {
        console.log("Your name is " + name);
    }
}

ChildFunction2.prototype = Object.create(ParentFunctionWithNoConstructor.prototype);
ChildFunction2.prototype.constructor = Object.defineProperty(ChildFunction.prototype, 'constructor', {
    value: ChildFunction2,
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true
})

let childInstance2 = new ChildFunction2("Anand");
childInstance2.message();
childInstance2.getName();
childInstance2.specialFunction();

console.log(Object.getOwnPropertyNames(ParentFunctionWithNoConstructor.prototype));
console.log(Object.getOwnPropertyNames(ChildFunction2.prototype));
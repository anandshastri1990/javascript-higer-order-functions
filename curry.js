//Currying
let multiplyCurrying = function (x,y) {
    console.log(x * y);
}

let multiplyByTwo = multiplyCurrying.bind(this, 2);
multiplyByTwo(3);
let multiplyByThree = multiplyCurrying.bind(this, 3);
multiplyByThree(3);


//Closures
let multiplyClosures = (x) => {
    return (y) => {
        console.log(x * y);
    }
}

multiplyClosures(2)(3);
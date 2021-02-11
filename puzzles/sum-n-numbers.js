//sum(1)(2)(3)(4)(5).....(N)

let sumNNumbers = (a) => (b) => b ? sumNNumbers(a + b) : a;

console.log(sumNNumbers(1)(2)(3)(4)());

//  ! Function ways

// todo    1. Nomli funksiya - Named Function

function myFunctionName () {
    console.log("Start Function");
}
myFunctionName();

// ? ------------------------------------------------------------------------------------------------------------------------

// todo    2. Anonim function - Anonymous function

let sayHello = function(ret, age) {
    console.log(`Sizga shu avtomobil sovg'a ${ret}, uni yoshi ${age}`);
}
sayHello("Malibu", 1)

// ? ------------------------------------------------------------------------------------------------------------------------

// todo    3. Arrow Function

const salom = () => {
    console.log("3 - Arrow Function");
}
salom();

// ? ------------------------------------------------------------------------------------------------------------------------

// todo    4. IIFE function - Immediately Invoked Function Experession

(function (name, age) {
    console.log(`Bugun ${name}, soat ${age}`);
})("Dushanba", "7:00");

// ? ------------------------------------------------------------------------------------------------------------------------

// todo    5. Higher Otder Function

let ary = [3, 17.3, 56];
let newArry = ary.map((tray) => tray / 2);
console.log(newArry);

// ? ------------------------------------------------------------------------------------------------------------------------

// todo    6. Constructor function

function Person (salom, vazn, age) {
    this.name = salom;
    this.winth = vazn;
    this.age = age
}
let user = new Person("Azizbek", 50, 14);
console.log(user);
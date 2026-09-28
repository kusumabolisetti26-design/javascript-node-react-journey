
    let name = "Kusuma";
    let age = 20;
    let branch = "IT";
    let cgpa = 9.12;
console.log(`My name is ${name},I am ${age} years old,studying ${branch},and my CGPA is ${cgpa}`);

let student = {
    nam: "Kusuma",
    ag: 20,
    branc: "IT",
    cgp: 9.12
};
let {nam,ag,branc,cgp}=student;
console.log(nam);
console.log(ag);
console.log(branc);
console.log(cgp);

let numbers = [10, 20, 30, 40, 50];
let [a,b,c,d,e]=numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

let ab= [10, 20, 30];
let ba = [40, 50, 60];
let result=[...ab,...ba];
console.log(result);


let students = {
    name: "Kusuma",
    age: 20
};
let newstudent={
    ...students,
    age:21,
    bran:"IT"
};
console.log(newstudent);
function addNumbers(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

let resul = addNumbers(10, 20, 30, 40, 50);

console.log(resul);
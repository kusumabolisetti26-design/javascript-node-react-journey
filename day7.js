let students={
    name:"kusuma",
    age:19,
    branch:"IT",
    cgpa:9.1
}
console.log(students.name);
console.log(students.age);
console.log(students.branch);
console.log(students.cgpa);

let stu={
    name:"kusuma",
    age:19,
    branch:"IT",
    cgpa:9.1
}
stu.age=21
console.log(stu);

let student={
    name:"kusuma",
    age:19,
    branch:"IT",
    cgpa:9.1
}
student.college="vishnu";
console.log(student);

let studen = {
    name: "Kusuma",
    skills: ["Java", "Python", "JavaScript"]
};
console.log(studen.name);
console.log(studen.skills[0]);
console.log(studen.skills[2]);

let stude = [
    { name: "Kusuma", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Priya", marks: 91 }
];
console.log(stude[0]);
console.log(stude[1]);
console.log(stude[2]);

let stud = [
    { name: "Kusuma", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Priya", marks: 91 }
];
let result = stud.filter((student) => {
    return student.marks >= 80;
});

console.log(result);

let resul = stud
    .filter((student) => student.marks >= 80)
    .map((student) => student.name);

console.log(resul);

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];
let res=products.filter((p)=>{
    return p.price>1000;
});
console.log(res);
let re=products.filter((p)=>p.price>1000).map((p)=>p.name);
console.log(re);

let totalPrice=products.reduce((total,p)=>{
    return total+p.price;},0);
console.log(totalPrice);
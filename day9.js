let students = [
    { name: "Kusuma", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Priya", marks: 91 }
];
let stu=students.find((n)=>{return n.name==="Priya";
});
console.log(stu);

let student = [
    { name: "Kusuma", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Priya", marks: 91 }
];
let s=student.some((n)=>{
    return n.marks<40;
});
console.log(s);

let studen= [
    { name: "Kusuma", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Priya", marks: 91 }
];
let st=studen.every((n)=>{
    return n.marks>60;
});
console.log(st);

let stude= [
    { name: "Kusuma", marks: 85 },
    { name: "Rahul", marks: 72 },
    { name: "Priya", marks: 91 }
];
let stud=stude.filter((n)=>{
    return n.marks>=80;
});
let sss=stud.map((n)=>{
    return n.name;
});
console.log(sss);

let products = [
    { name: "Laptop", price: 50000, stock: true },
    { name: "Phone", price: 20000, stock: false },
    { name: "Mouse", price: 500, stock: true },
    { name: "Keyboard", price: 1500, stock: true }
];
let ph=products.find((n)=>{
    return n.name==="Phone";
});
console.log(ph);
let stac=products.filter((b)=>{
    return b.stock===true;
});
console.log(stac);

let na=products.map((n)=>{
    return n.name;
});
console.log(na);

let a=products.some((n)=>{
    return n.price>40000;
})
console.log(a);
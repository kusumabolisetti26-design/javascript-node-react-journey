let numbers = [10, 20, 30, 40, 50];
let res=numbers.slice(1,4);
console.log(res);

let num = [10, 20, 30, 40, 50];
num.splice(2,1);
console.log(num);

let n = [50, 10, 40, 20, 30];
n.sort((a,b)=>a-b);
console.log(n);
n.sort((a,b)=>b-a);
console.log(n);

let nums = [10, 20, 30, 40, 50];
nums.forEach(n=>{console.log(n)});

let numbs = [10, 20, 30, 40, 50];
let mul=numbs.map((n)=>{return n*2});
console.log(mul);


let ns = [10, 15, 20, 25, 30, 35, 40];
let even=ns.filter((n)=>{return n%2===0});
console.log(even);

let numrs = [10, 15, 20, 25, 30, 35, 40];
let sum=numrs.reduce((total,n)=>{return total+n},0);
console.log(sum);

let nu = [12, 5, 8, 20, 3, 15];

let grt = nu.filter((n) => {
    return n > 10;
});

console.log(grt);
let doubled = nu.map((n) => {
    return n * 2;
});

console.log(doubled);
let total = nu.reduce((sum, n) => {
    return sum + n;
}, 0);

console.log(total);
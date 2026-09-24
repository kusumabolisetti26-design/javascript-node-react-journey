function greet(name)
{
    console.log("hello",name);
}
greet("Hemanth");

function add(a,b)
{
    return a+b;
}
let result=add(10,20);
console.log(result);

function checkEvenOdd(number)
{
    if(number%2===0)
    {
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
checkEvenOdd(8);

function findLargest(a, b)
{
    if(a>b)
    {
        console.log(a,"is largest number");
    }
    else{
        console.log(b,"is largest number");
    }
}
findLargest(10,15);

function sumNumbers(n)
{
    let sum=0;
    for(let i=0;i<=n;i++)
        {
              sum=sum+i;
        }
        console.log(sum);
}
sumNumbers(10);

const square = (nu) => nu ** 2;

console.log(square(5));
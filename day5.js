let num=[10,20,30,40];
console.log(num[0]);
console.log(num[2]);
console.log(num[3]);
console.log(num.length);

let fruits = ["Apple", "Banana"];
fruits.push("Mango");
console.log(fruits);
fruits.pop();
console.log(fruits);


let numbers = [10, 15, 20, 25, 30, 35, 40];
for(let i=0;i<numbers.length;i++)
{
    if(i%2===0)
    {
        console.log(numbers[i]);
    }
}

let nums = [5, 10, 15, 20, 25];
let target = 20;
for(let i=0;i<nums.length;i++)
{
    if(nums[i]==target)
    {
        console.log("found");
    }
}



let nu = [10, 20, 30, 40, 50];
let sum=0;
for(let i=0;i<nu.length;i++)
{
    sum+=nu[i];
}
console.log(sum);


let numbs = [10, 45, 23, 67, 12];
let largest=numbs[0];
for(let i=0;i<numbs.length;i++)
{
    if(numbs[i]>largest)
    {
        largest=numbs[i];
    }
}
console.log(largest);

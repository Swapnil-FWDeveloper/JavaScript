// function=> if we want to increase code reusebality at that time we
// we will use function

// like example 
function Printvalue(){
    let result=1+2+3+4+5;

    result=result*2+3; //we can
    console.log(result)
    result=result/3;
    console.log(result)
}
// Printvalue()//like this we have increse the code reusibility else every time we have to declare
// the variables but here thir is the problem that we have to work with given value only so we 
// more advance method that is we will pass the parameter as the variables
// console.log("//////////////////new function began//////////////////////")
function Printvalue1(a,b,c,d,e){
let result=a+b;
console.log(result)
let result1=a*b*c+d
console.log(result1)
}
Printvalue1(2,3,)
Printvalue1(4,9,12,234)
// so here if want to change the value we can do that everytime just we have to declare the variable and print the value and 
// update the value in function call

function AdvanceFunc(a,b,c){

    let result=(a+b+c)
    // console.log(result)
    return result
    // return will be used whenever we want to create situation like line not 42
}
AdvanceFunc(5,4,8)
// AdvanceFunc(50,55,60)
// now we will call this AdvanceFunc inside AdvanceFunc2

function AdvanceFunc2(name,company){
let use_data=`hello my name is ${name} I am Full Stack Webdeveloper in ${company}
and my sallary is ${AdvanceFunc(1,5500,90000)}`
console.log( use_data)

}
AdvanceFunc2("Swapnil Shende","Google",4000000)


// Sum of Array using function

function Array(array){
let sum=0;
for(let i=0;i<array.length;i++)
{
    sum+=array[i]
}
console.log(sum)
}
Array([5,4,7,8,9])

//////////////////////////////////////Scoping////////////////////////////////////////////////////////
// You can check my scoping videos on Youtube
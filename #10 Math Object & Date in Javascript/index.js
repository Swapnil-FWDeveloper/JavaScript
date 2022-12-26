

// Math is and Object and it type can be anything
// Math.reandow()now it become function
// like:
// Math.random,.floor,.ceil.and many more 

console.log(Math.random(4.7))// it will round off the value and it will return vlaue as 5 and in 4.4=4
console.log(Math.floor(4.9)) // it will always return the less/floor value like in this case 4.9 it will print 5 as an output and for 4.2 also 4
console.log(Math.ceil(4.9))// it will always return the higest/ceil value like in this case 4.9 it will print 5 as an output and for 4.2 also 5
console.log(Math.sign(123))// it will always return number is positive or negative 123 is + and -123 is -
console.log(Math.pow(2,4))// so here 2 is the number and after , 4 is the power of 2 so output will be 32 it will return power
console.log(Math.sqrt(64)) // it will always return square root of a number so here 64 is the number and its squareroot is 8 so we will get 8 as a output
console.log(Math.abs(-123))// it will always return positive value only we need help in case
const func1=(a,b)=>{
    // return a-b
    return Math.abs(a-b)
}
console.log(func1(2,5)) // output should be -3 but we will get as 3 due to Math.abs()
console.log(Math.random(0)*10)//it will return random values form 0 to 10

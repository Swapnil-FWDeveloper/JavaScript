
// let arr=[]
// Array means a Data-Type where you can store multiple things

// example
let arr1=[1,2,3,4,5]
console.log(arr1)
// so we got the list of array with indexing like 0:1,1:2 ...4:5 
// so in coding always indexing/position will start from 0 or counting will start from 0
//  Now if we want to print only first index which is 0 in this case so I will do
//  let arr=[1,2,3,4,5];
//  console.log(arr[0])
//  so we will get output=1
// and if we do  console.log(arr[5]) then it will give error as undefined because anything dose't exits in array

// so in other language we are starting array with number then we have continue array with number only
// but in JAVASCRIPT we can start with string and number like ex

let arr2=["Swapnil",20];
console.log(arr2)

// We can also assign vlaue to an array like
let arr3=[];
arr3[0]=12;
arr3[1]=11;
arr3[2]=15;
console.log(arr3)

// This in js we can redclare the size of js in other language we cant do..

//////////////////////////////////////////////////

// We can declare the size of the array without defining the size like

let array=new Array(4) //we can write anyting instend of four
console.log(array)
// length of the array is 4
/////////////////////////////////////////////////


// Methods of Array

// push Methods
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon");
console.log(fruits)
// nameof the variable.push  we will find kiwi and lemon get added in array at last

// pop Methods
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.pop();
console.log(fruits1)
// one element of the array get removed form last

// Shift Methods
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.shift();
console.log(fruits2)
// first element got deleted


// unshift Methods
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.unshift("COCOnut");
console.log(fruits3)
// COCOnut will get added in array at 0 index

// splice Methods
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
fruits4.splice(1,2);
console.log(fruits4)
// here we can delete the element from between 1 to 2(2 means from 1 index to number of number selected)

// slice Methods
const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
fruits5.slice(1,2);
console.log(fruits5)
//W3 school

///////////////////////////////////////////////////OBJECTS/////////////////////////////////////////////////////////

// Object => Object is that where we are storing key value pair 
// why Object are used coz using object we can reuse coding so many time lets say we want to make a class count so we will do


let School={
    name:'Masai',
    class:{
        Roll1:"Anshul",
        Roll2:"Anshul",
        Roll2:"Anshul",
    },
    classB:{
        Roll1:"Anshul",
        Roll2:"Anshul",
        Roll2:"Anshul",
    }
}
// so here key is Roll1 and value is "Anshul"
console.log(School)// here we printed whole object
console.log(School.class)// here we printed the value of class
console.log(School.classB)// here we printed the vlaue of classB

// for more detail visit https://www.youtube.com/watch?v=LgZZLeWKGsI
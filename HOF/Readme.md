Remove Elements from a JavaScript Array
JavaScript Arrays allow you to group values and iterate over them. You can add and remove array elements in different ways. Unfortunately there is not any simple remove method to do that. So, how do you delete an element from a JavaScript array?

Instead of a simple remove method, the JavaScript array has a variety of ways you can clean array values. You can remove elements from the end of an array using pop, from the beginning using shift, or from the middle using splice. The advanced way to remove unwanted elements is to use JavaScript Array filter method to create a new array with desired items.

Scope
In this article, we are going to learn how to remove an element from an array in javascript using the following different techniques and methods:
splice()
filter()
shift()
pop()
We will also learn about array indexes, the indexOf() method, and using the for loop to remove an element.
We will also learn about delete operator and why you should not use the delete operator.
Introduction
The array is one of the most important data structures and a widely used one. We can perform many different kinds of operations on an array, like iteration over array elements, adding a new element, removing an element, etc. In this article, we are going to learn about the different ways in which we can remove a specific element from an array in javascript.

Remove Elements from a js Array

Understanding Array Indexes
Before discussing ways to remove an element from an array in javascript, let's first discuss array indexes.

[IMAGE 2 an array of characters with the index of each element on top of every array element]

Array indexes are the whole numbers from 
0
0 to 
(
�
−
1
)
(n−1) (where 
�
n is the length of the array), assigned to each element of the array in a continuous manner.

Using the array index, we can access an array element individually in constant time without iterating through the whole array.

Let's understand this with an example.

const carBrands = ["BMW", "Audi", "GM", "Ford", "Tesla"];
console.log("Second brand in car brands is " + carBrands[1]);
console.log("Fourth brand in car brands is " + carBrands[3]);
Output :

Second brand in car brand is Audi
Fourth brand in car brands is Ford
As the index starts from zero hence, index 1 correspond to the second element of the array, and index 3 correspond to the fourth element.

Note : In javascript, we cannot use negative indexes to access array elements from the end, that's not allowed by default.

Using indexOf() And splice() - Mutable Pattern
Now you know how to access array elements using array index, let's see how to remove an element from the array using the splice() method.

splice() is an inbuilt method in javascript. It's used to modify existing array elements by removing or replacing them with array elements. This method is categorized in the mutable(liable to change) pattern because here, we are making changes in the same array and not creating a new array.

Syntax :
array.splice(index, remove_count, item_list);
Parameters of splice :

index : Index value from where we want to remove/replace the elements. If it is negative, then it'll be counted from the end of the array, for instance, -2 will be the last-second array element.

remove_count : This represents the number of array elements we want to remove from the previously mentioned index value. 1 if we want to remove only one array element.

item_list(optional) : This is the list of new items separated by the comma operator that we want to be put in the array starting from the index value mentioned in the first parameter.

Code Example :
1. Removing a specific element

const carBrands = ["BMW", "Audi", "GM", "Ford", "Tesla"];
console.log("Original Brands: " + carBrands);

carBrands.splice(2, 1);
console.log("After splice() method: " + carBrands);
Output :

Original Brands: BMW,Audi,GM,Ford,Tesla
After splice() method: BMW,Audi,Ford,Tesla
2. Replacing an element with a new element

const carBrands = ["BMW", "Audi", "GM", "Ford", "Tesla"];
console.log("Original Brands: " + carBrands);

carBrands.splice(2, 1, "Mercedes", "TATA");
console.log("After splice() method: " + carBrands);
Output :

Original Brands: BMW,Audi,GM,Ford,Tesla
After splice() method: BMW,Audi,Mercedes,TATA,Ford,Tesla
3. Removing an element when we don't know its index(using indexOf() method)

const carBrands = ["BMW", "Audi", "GM", "Ford", "Tesla"];
console.log("Original Brands: " + carBrands);

const elementIndex = carBrands.indexOf("GM");
carBrands.splice(elementIndex, 1, "Mercedes", "TATA");

console.log("After splice() method: " + carBrands);
Output :

Original Brands: BMW,Audi,GM,Ford,Tesla
After splice() method: BMW,Audi,Mercedes,TATA,Ford,Tesla
Here, we are using .indexOf() method to get index of "GM" brand. We use this method when we don't know the location of the element we want to remove from the array.

Using .filter() - Immutable Pattern
We can also remove an element or multiple elements using the filter() method. It's also an inbuilt javascript function that creates a new array of elements from the given array consisting of only those elements who satisfy a specific condition set in the callback function of the filter() method. We follow an immutable pattern here as we are creating a new array and not making in-place changes in the original array.

Syntax :
array.filter(callback(element, index, arr), thisValue);
Parameters of filter() :
callback() : The first parameter of filter() is a callback function(a normal function passed as an argument in some other function) that will be called for each element of the array. This function contains the condition that the array elements have to follow, and the elements who will follow the condition will be in the new array.
The callback function has three parameters : element, index, and arr.
element is the current element passed in the function. It's a required parameter.
index is the current index of the element passed. It's an optional parameter.
arr is the array of the current element passed. It's also an optional parameter.
thisValue : It's an optional parameter. It contains the value that will be used as the callback's this value. It's undefined by default.
Code example :
Removing ages less than 18

const ages = [16, 32, 21, 18, 27, 17];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log("Ages greater than or equal to 18: " + result);
Output :

Ages greater than or equal to 18: 32,21,18,27
Using thisValue parameter to print out divisible of different numbers

Taking 2 as thisValue:
const numbers = [23, 20, 1, 34, 3, 8, 45, 33, 76, 2];

function condition(number) {
  return number % this === 0;
}
const result = numbers.filter(condition, 2);
console.log(result);
Output :

[20, 34, 8, 76, 2]
Taking 3 as thisValue :
const numbers = [23, 20, 1, 34, 3, 8, 45, 33, 76, 2];

function condition(element) {
  return element % this === 0;
}
const result = numbers.filter(condition, 3);
console.log(result);
Output :

[3, 45, 33]
Using A for Loop - Traditional Pattern
Instead of using an inbuilt method of javascript, we can program a method to remove an element ourselves using the for loop.

Code example :
Removing BMW from car brands array and returning a new array in result(immutable pattern)

const carBrands = ["BMW", "Audi", "GM", "Ford", "Tesla"];
const newCarBrands = [];
for (let i = 0; i < carBrands.length; i++) {
  if (carBrands[i] !== "BMW") {
    newCarBrands.push(carBrands[i]);
  }
}
console.log("New car brands: " + newCarBrands);
Output :

New car brands: Audi,GM,Ford,Tesla
In the above example, we have used for loop to remove a specific array element. We have to use an if condition inside the loop, the condition will determine which element will be removed.

Using shift() And pop() Function
The shift() function removes the first element of the array, and the pop() function removes the last element of the array. Both of these functions return the removed array element and if they are used on an empty array, they will return undefined.

Syntax :
array.shift();
array.pop();
They don't accept any parameters.

Code example :
Removing an element from the start of the array(using the shift() method)

const carBrands = ["BMW", "Audi", "GM", "Ford", "Tesla"];
carBrands.shift();
console.log("New car brands: " + carBrands);
Output :

New car brands: Audi,GM,Ford,Tesla
Removing an element from the end of the array(using the pop() method)

const carBrands = ["BMW", "Audi", "GM", "Ford", "Tesla"];
carBrands.pop();
console.log("New car brands: " + carBrands);
Output :

New car brands: BMW,Audi,GM,Ford
Avoiding The "delete" Keyword
The delete operator can also remove an element from the array in javascript. However, it's not recommended to use the delete operator to remove an array element because of its disadvantage. When we use delete to remove an array element, it removes the value from the array but does not free up that index; hence, the original array length does not change. This can get confusing and can cause further problems in the code, so it's recommended to avoid the use of delete to remove an array element.

Syntax :
delete expression;
Code example :
const carBrands = ["BMW", "Audi", "GM", "Ford", "Tesla"];
console.log("original array length: " + carBrands.length);

delete carBrands[2];

console.log("New car brands: " + carBrands);
console.log("new array length: " + carBrands.length);
Output :

original array length: 5
New car brands: BMW,Audi,,Ford,Tesla 
new array length: 5
As you can see, both the original and the new array lengths are the same. Note: In the above example, one string is empty(the extra "," is not a typo).

Conclusion
The Array is an important data structure, and learning the operations that can be performed on it, is always beneficial.
In this article, you learned about how to remove a specific element or a set of elements from the array using different methods.
We got to know about, array indexes - indexOf() and splice() methods - using filter() and for loop to remove elements - shift() and pop() methods - And why avoid using the "delete" operator,It's always good to know more than one way to do a task!


For More good UserInteraction https://www.scaler.com/topics/remove-element-from-array-javascript/ 


we can give script tag inside body tag or after body tag or after head tag in this all type script tag will work



RULES TO DECLARE A VARIABLE
1.Name should not start with number we can use underscore or $ symbol _123 or $123 not any other Symbol
2.Varible are casesensitive means a is diffrent from A
3.You cant use variable name with any symbol,brases,not even <>or=

let x=10;
alert(x);
here var is let and it is worling as a container in which x has value 10 which is stored in container let and 
OUTPUT will be popup window with alert 10

Lets have a fun;
let x=10;
x=20
console.log(x)
output is 20 coz initially value was 10 and after we have declared variable with value assign was 20;

lets increase the level of fun😛

so tell me 🤔 what will be the output of a question without looking output stop reading after question 😁😀

let x=10;
console.log(x)
x=11;
console.log(x);
x=12;
console.log(x);
console.log(x);

OPTIONS :=)
 a) 10,11,12,12   b) 12,12,12,12
 c) 11,12,undefine d)10,11,12,10

STOP READING FROM HERE FIRST FIND YOUR OWN SOLUTION 😎

so the correct ans is but before that have you solved it dont cheat onkhey

correct answer is =)

10,11,12,12 which is option a 
This option because JavaScript run from Top to Bottom there for at first 10 then 11,12,12


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let x=10;
console.log(x)

let x=15;
console.log(x)

so what will be the output =)"SyntaxError: Identifier 'x' has already been declared"
 so, it will throw the error because WE CANT DECLARE SAME VARIABLE WITH SAME NAME.(name should be diffrent it can have smae value).

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const it is also type of variable(most powerful variable)

const x=14;
console.log(x)
output=14

const x=54;
x=14;
console.log(x)

Options =)
a> 54, b> 14
c> Uncaught TypeError: Assignment to constant variable. d> Nothing will be shown in brouser console

ANSWER is option "c" because whenever in const variable once we have declared a name we cant assign value the same name variable

In some days I will enlight Diffrence between var,let,const once scoping topic is covered.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Now we have coverd some baisc things but we havent check the typeof means what is the type of a number 1 or "1"
lets have some fun

let name ="Swapnil Shende";
console.log(name);
console.log(typeof(name))
lets check what is the type of my name either its number or string 

SO what the thing is this what is typeof means in programing languages?
So mainly in programing languages we have two type of value either string (""); or number (123);
so lets come back to the question 
so the type of name is String because it is writen inside "";

So lets have one more trickey question.

what will be the output of the question

let number="123456";
console.log(number)

OptionS =)
a) number  b) string 

correct ans is

It's not number it's a string because it's writen inside the "" not outside ""

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Now lets have again fun 
JS have two type of Datatype
the value can be true or false (thsi two Datatype is known as boolean)
Always remeber true is denoted as 1 and flase is denoted as 0;
In JavaScript, a boolean value is one that can either be TRUE or FALSE

let name ="Swapnil Shende";
let age=20;
console.log("name:",name,"age:",age)
output =) name: Swapnil Shende age: 20 noDoubt

Now
let age=20;
let jadu=true;
console.log(age+10)
output => 30
but now 
console.log(age+10+jadu)
output=31
this happned because I told in above line that true means +1 and false means 0

some advane version of line no 116;

let name='Swapnil'
let surname='Shende'
console.log('My name is'+" "+name+" "+surname+".")
console.log(`My name is ${name} ${surname}.`)

My linkding account : https://www.linkedin.com/in/swapnil-shende-0b5525228/
My instagram account : https://www.instagram.com/swapnil.146/
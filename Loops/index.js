
// So in everones life we have choices like "eithe we want to go anywhere or not ",
// or "you want to eat ice-cream or not" or"
// either you want to earn money it dont have choices you have to earn money" so



// if else is also same thing choices

// lets say Ayush has 10rs and he want to buy a icecream under 10rs or =10rs.
// and Chites has 15rs and he want to buy ice-cream >10rs and <=15rs.
// so menu is been follow as

// Baraf culfi=10rs;
// Chokos culfi=15rs;

// now we are going 

// But before that you should know the diffrence between all the operaters
// Operator  Description	      Example
// +	      Addition	          10+20 = 30
// -	      Subtraction	      20-10 = 10
// *	      Multiplication      10*20 = 200
// /	      Division	          20/10 = 2
// %	      Modulus (Remainder) 20%10 = 0
// ++	      Increment	          var a=10; a++; Now a = 11
// --	      Decrement           var =10;a--;Now a=9

// Diffrence between % and /
// Modulus % Operator it will always give the Remainder;
// Division / Operator it will always return Quotient;

// Please check Operators on https://www.javatpoint.com/javascript-operators

// Now jumping on our question:

let Ayush="10rs";
let Chitesh ="15rs";

if(Ayush=="10rs")
{
    console.log("Ayush can buy Baraf Culfi")
}
if(Chitesh=="15rs")
{
    console.log("Chitesh can buy Chokos Culfi")
}

// HomeWork diffrence between == and ===

// Moving on little advance 
// let Money=Number(prompt("Type your amount"));
// let Money=(prompt("Type your amount"));
// if(Money==10)
// {
//     console.log("Baraf culfi is available")
// }
// else if(Money>=15&&Money<=20){
//     console.log("Chakos culfi is available",",","Maza vanila is available")
// }
// else if(Money>=100&&Money<=200){
//     console.log("No option available ")
// }
// else{
//     console.log("Temporary stock is over")
// }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////ForLoops/////////////////////////////////////////////////////////////////

// If you to console.log("Hello") 100 time then one condition is one we can do console.log("Hello")100 times which is not a good
// option so here we can use for-loops we can do

for(let i=1;i<=100;i++)
{
    console.log("Hello")
}
// so here we will get the output 100 times by using we save our time/effort/and TIMECOMPLEXCITY
// here initially i=1 and 1<=100 true then it goes to console.log("Hello"); i++ i become i+1=2;
// now i=2 2<=100 true then it goes to console.log("Hello"); i++ i become i+1=3;... like this
// i=100 100<=100 true then it goes to console.log("Hello"); i++ i become i++ now ibecame 101
// i=101 101<=100 false now loop will not get exicuted

// Print random number from 0 to 10 using for loop

for(let i=0;i<=10;i++)
{
console.log(Math.random());
console.log("Value is in decimal")
}
// but we will get decimal values;

//  so we can do one thing 

for(let i=0;i<=10;i++)
{
    console.log(Math.floor(Math.random()*10))
    console.log("vaule is not decimal")
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////WHILE LOOP /////////////////////////////////////////////////////////

// let i=0;
// while( i<10) {
//     console.log("While Loop is working");

// }
// But here we can see this loop will run till INFINITY Because
//  always i value is 0 and 0<10 which is true condition
let i=0;
while( i<10) {
    console.log("While Loop is working");
    i++

}
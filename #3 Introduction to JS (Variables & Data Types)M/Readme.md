https://replit.com/@SwapnilShende1/VariablesDay-1#problem_one.js


Intro
JavaScript is a scripting or programming language that allows you to implement complex
features on web pages — every time a web page does more than just sit there and
display static information for you to look at — displaying timely content updates,
interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can
bet that JavaScript is probably involved.
JavaScript enables you to create dynamically updating content, control multimedia,
animate images, and pretty much everything else. (Okay, not everything, but it is
amazing what you can achieve with a few lines of JavaScript code.)
Node JS
Node.js is an open-source, cross-platform, back-end JavaScript runtime environment
that runs and executes JavaScript code outside a web browser. Node.js lets developers
use JavaScript to write command-line tools and for server-side scripting.
Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web
application development around a single programming language, rather than different
languages for server-side and client-side scripts.
Coding Platform
https://replit.com/
Running Javascript Code
node filename.js
Variables:
We use programming languages like JavaScript to store and manipulate information.
Variables in JavaScript are used to store different kinds of data. Think of a variable
like a bottle. We use bottles to store water, in much the same way we use variables to
store various forms of data in JavaScript.
Example:
var number = 200
Syntax: You can also declare multiple variables in one statement as seen in the syntax
below.
Multiple Variables Example:
var a = 100, b = 200, c = 300;
The data inside variables is not constant. This means the data inside a variable can
be changed.
Example:
var a = 200
a = 100
In the above example the variable called a first contained the value 200 but a = 100
means that a now contains the value 100.
NOTE: You can name variables whatever you want but try to give them good/descriptive
names that tell the reader what the variable is used for
Data Types In Javascript:
There are 7 types of data in JavaScript but we will focus on 2 types of data for now.
Strings:
The first type of data is a String. This is used to store a sequence of characters
used to represent text.
Example:
var name = "Masai School"
Any data within quotes " " is a String in JavaScript.
Numbers:
The second type of data we want to know is a Number, which is used to store any kind
of numbers. We have already seen this type of data in the variables example. Numbers
can store both Whole Numbers/Integers and Decimals.
Example:
var num = 100
var dec = 100.001
Checking the type of data: Lets say you have some data but you don't know what type it
is. You can user the typeof() inbuilt code to find the type of the data.
Example:
var name = "Masai School"
console.log(typeof(name))
Output:
string

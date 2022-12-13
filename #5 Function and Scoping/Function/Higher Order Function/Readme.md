let arr=[1,200,3,4,5,6,7,8,9,100,15,20]

// Here there are 3 ways to iterate the array
// 1. For Loop // while loop
// 2. By using forEach()// inbuid function
// 3. By using of Loop

// so I consider you have watched my basic js and dsa syntax + repo where I have discussed about js and all types of loops and some basic stuff, so I will go with 2 and 3 step

// let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let sum=0;
let count=0
arr.forEach(function(index,el){
  if(index%2==1){
    sum+=el
    count++
  }
})
console.log(Math.floor(sum/count))

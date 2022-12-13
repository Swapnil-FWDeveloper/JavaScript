
let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let sum=0;
let count=0
arr.forEach(function(index,el){
  if(index%2==1){
    sum+=el
    count++
  }
})
console.log(Math.floor(sum/count))

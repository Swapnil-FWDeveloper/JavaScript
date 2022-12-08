let arr=[10,20,30,40,5,6,7]
function divisible_10(number){
  // let arr=[]
    if(number%10==0){
      return true
    }else{
      return false
  }
}
  let emp=[]
  for(let i=0;i<arr.length;i++){
   let result= divisible_10(arr[i])
    if(result==true){
      emp.push(arr[i])
    }
}
console.log(emp)
let arr=[1,2,3,4,5,6]
let sum=0;

function add(){
  let output=[]
  for(let i=0;i<arr.length;i++){
    output.push(arr[i]**2)
  }
  return output
}
let result=(add(arr))

function checkeven(result){
  for(let i=0;i<result.length;i++){
    if(result[i]%2==0){
      console.log(result[i])
    }
  }
}
checkeven(result)
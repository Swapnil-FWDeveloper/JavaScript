let lower='abcdefghijklmnopqrstuvwxyz'
let upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let char='A'
let flag=false
for(let i=0;i<lower.length;i++){
  if(char[i]==lower[i])
  {
    flag=true  
    break;
  }
}
if(flag == true){
  console.log('It is not a Capital letterer')
}else{
  console.log('It is Capital letter')
}

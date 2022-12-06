function nonPrime(num){
    let count=0;
    for(let i=0;i<=num;i++){
      if(num%i==0){
        count++
      }
    }
    if(count==2)
    {
      return true
    }else{
      return false
    }
  }
  
  for(let i=1;i<=16;i++){
    let output=nonPrime(i)
    {
      if(output==false){
        console.log(i,'it is not a prime number')
      } 
    }
  }
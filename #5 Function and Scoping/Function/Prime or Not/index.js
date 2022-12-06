function checkprime(num){
    let count=0
    for(let i=0;i<=num;i++){
      if(num%i==0){
        count++
      }
    }
    if(count==2){
      console.log(count,'number is prime')
    }else{
      console.log('number is not prime')
    }
  }
  checkprime(11)
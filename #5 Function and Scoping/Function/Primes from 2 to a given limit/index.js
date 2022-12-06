

function checkPrime(num){
    let count=0
    for(let i=1;i<=num;i++){
      if(num%i==0)
      {
        count++
      }
    }
    if(count==2){
      return true;
    }else{
      return false;
    }
  }
  // let output=(checkPrime(num))
  // let output=checkPrime(i)
  // so here at line Number 3 parameter is num and at line number 21 in function call we are passing parameter as j coz 21 line j it taking all the values form 0 to given limit and j is passing value to num now num got incremented to 0 initially even you can pass there j insted of num as a parameter
  
  for(let j=0;j<=10;j++){
    let output=checkPrime(j)
    if(output==true){
      console.log(j,"is a prime number")
    }
  }
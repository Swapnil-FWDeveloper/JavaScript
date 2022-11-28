

let num=5
for(let i=0;i<num;i++){        //*
  let bag='';                  //*
  for(let j=0;j<=i;j++)        //* *
    {                          //* *
      bag+="*"+" "             //* * *
    }                          //* * *
  for(let k=0;k<i;k++){        //* * * *
                               //* * * *
     for(let l=num.length-1;l>=0;l--) 
       {                       // * * * * *
         bag=l                 // * * * * *
       }
      }
  
  console.log(bag)
  console.log(bag)
}
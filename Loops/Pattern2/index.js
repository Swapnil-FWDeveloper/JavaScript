
// pattern2 
let i,j;                    // *
for( i=0;i<6;i++){          // * * 
  let bag="";               // * * *
  for( j=0;j<=i;j++)        // * * * *
    {                       // * * * * *
      bag+="*"+" "
     // bag+=j,i+" "        //0
    }                       //0 1
  console.log(bag)          //0 1 2 
}                           //0 1 2 3 

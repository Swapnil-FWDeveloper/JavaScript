// pattern4
let i,j;                      //4 5 6 7 8
for(i=4;i>=0;i--){            //3 4 5 6
  let bag=""                  //2 3 4
  for(j=0;j<=i;j++)           //1 2
    {                         //0
      // bag+="*"+" "
      bag+=j+i+" "
    }
  console.log(bag)
}
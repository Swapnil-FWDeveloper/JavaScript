let S='abc'
let obj={};
let char='abcdefghijklmnopqrstuvwxyz'
let n=1
for(let i=0;i<char.length;i++){
    if(obj[char[i]]==undefined)
    {
       obj[char[i]]=n
        n++
    }
}
// console.log(obj)
//  let sum=0
//  for(let key in obj)
//  {
//      for(let i=0;i<S.length;i++){
//          sum+=key[S]
//      }
//  }
//  console.log(sum)
let sum=0
for(let i=0;i<S.length;i++){
    for(let key in obj)
    {
        if(key == S[i])
        {
            sum+=obj[key]
        }
    }
}
console.log(sum)
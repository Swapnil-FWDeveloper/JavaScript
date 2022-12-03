alert("Output is in browser console")
let N=5
 let str='abcdefghijklmnopqrstuvwxyz';
 let obj={}
 for(let i=0;i<N;i++){
     if(obj[str[i]]==undefined)
     {
         obj[str[i]]=i+1
     }
 }
 
 for(let key in obj){
 console.log(key + "-" + obj[key])
 }
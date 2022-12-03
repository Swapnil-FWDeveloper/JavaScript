
alert("Output is in browser console")
alert("Please Dry run the problem for better understanding")
let str='abcdefghijklmnopqrstuvwxyz'
let obj={};
let N=30;

for(let i=0;i<str.length;i++){
    if(obj[str[i]]==undefined){
        obj[str[i]]=N++
    }
}
for(let key in obj){
    console.log(key+"-"+obj[key])
}
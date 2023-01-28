function chips(){
    console.log('sync:chips')
}

function pizza(){
    setTimeout(()=>{
        console.log('async : Pizza')
    },1000)
}

function main(){
    chips()
    pizza()// data is shown in 1 second becasue of Settimeout;
    chips()
    chips()
    chips()
    // So at last piza func is called because we are give time to fun pizza that show data after 1000ms
    // nothing wrong code
}

main()
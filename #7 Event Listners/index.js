

const heading=document.getElementById("Heading")
const box1=document.getElementById("Box1")
const btn= document.getElementById('button')


// Now we will go on todays topic which is event listner

// so we can apply event listner on any on this variables

// box1.addEventListener("select a type/event", add a function or define a function)

// btn.addEventListener('click',()=>{
//     console.log('User Clicked')
// })
// it is not necessary addEventListener will only work on btn if you give same property to box1 then also it will work

///////////////////////////////////////////////////////////////
// we can also do as soon as some one click backgound color sold change also we can give all properties of  css
// btn.addEventListener('click',()=>{
//    box1.style.backgroundColor='red'
//    box1.style.padding='30px';
//    box1.style.color='white'
// }) // now we can see backgroundColor is changed to red
////////////////////////////////////////////////////////////////////////////////////////////

// now lets say we want to chage the css once some one click on button some
// 1 go to css file and give some property to the class (give the dummy name and use same name and use classList property)
// The classList property returns the CSS classnames of an element. also this property will not work for id

// btn.addEventListener('click',()=>{
//     box1.classList.add("class_of_event_listner")
//  })
 
const heading=document.getElementById("heading")
heading.innerText="This is JavaScript Challange by Hitesh Chaudhary"
// task 1 completed 

const main=document.getElementsByClassName("main")

main[0].style.backgroundColor="#739f6f"

// task 2 completed

const element=document.createElement("div")
element.innerText="This content is rendered by Javascript by adding p tag"
const parentDiv=document.getElementById("insert")
parentDiv.appendChild(element)

//task 3 completed


const list =document.getElementsByTagName("ul")
const li=document.createElement("li")
    li.innerText="This list is added by javascript"
list[0].append(li)
// task 4 comleted

const para=document.getElementsByTagName("p")
para[0].remove()
// task 5 completed

const toRemove=document.querySelectorAll("li")
toRemove[toRemove.length-1].remove()

//task 6 completed


const attributeChange=document.getElementById("image")
attributeChange.setAttribute("src","https://avatars.githubusercontent.com/u/11613311?v=4")
// task 7 completed

const classElement=document.getElementsByClassName("style")
classElement[0].classList.remove("color")
classElement[0].classList.add("color2")
// task 8 completed

const simple=document.getElementById("simple")
function changeText(){

    simple.innerText="This paragraph text is Change by Javascript"
}
// task 9 completed


simple.addEventListener("mouseover",(e)=>{
   
        simple.style.border="black 1px solid"
    
})
simple.addEventListener("mouseleave",()=>{
    simple.style.border="solid 1px #e1920a"
})

// task 10 completed
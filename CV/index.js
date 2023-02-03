console.log("Hello World!")

let form
window.addEventListener('load',()=>{
    form = document.querySelector("#form")
    form.addEventListener("submit",(event)=>{
        event.preventDefaultDefeault()
    })
})

//the above eventListener is to give the user a smoother experience - it stops the page from "refreshing" once the user hits search

const heading = document.querySelector("h1");
heading.style.colour = "purple, impact"

const heading = document.querySelector("h2");
heading.style.colour = "purple, impact"




let display = document.querySelector(".display > span")
let button = document.querySelectorAll("button")

let final = eval(display.dataset.set)
button.forEach(item => {
    item.addEventListener(("click"),(e)=>{
        if(e.target.dataset.set === "+"){
            final += 1
            display.dataset.set = final
            console.log(display.classList)
            if(display.classList.value === ""){
                console.log(display.classList)
                display.classList.add("up")
            }
            else if(display.classList.value === "down"){
                display.classList.remove("down")
                display.classList.add("up")
            }
            else if(display.classList.value === "up"){
                display.classList.remove("up")
                display.classList.add("up")
            }
            display.textContent = final
        }
        else if(e.target.dataset.set === "-"){
            final -= 1
            display.dataset.set = final
            if(display.classList.value === ""){
                console.log(display.classList)
                display.classList.add("down")
            }
            else if(display.classList.value === "up"){
                display.classList.remove("up")
                display.classList.add("down")
            }
            else if(display.classList.value === "down"){
                display.classList.remove("down")
                display.classList.add("down")
            }
            display.textContent = final
        }
    })
})


let display = document.getElementById("holder")
let clear = document.getElementById("clear")
let ops = document.querySelectorAll(".operators")
let reset = false

//add numbers and operators to the input
function append(input) {
    if (reset) {
        display.value = ""
        reset = false
        display.value += input
    } else {
        display.value += input
    }
}

//clearing input
clear.addEventListener("click", () => {
    display.value = ""
})

//calculating
function calc() {
    try {
        reset = true
        display.value = " = " + eval(display.value)
    } catch (error) {
        reset = true
        display.value = "U have erros in ur code!!"
    }
}

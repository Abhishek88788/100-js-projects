const counter = document.getElementById("counter")
const incrementBtn = document.getElementById("incrementBtn")
const decrementBtn = document.getElementById("decrementBtn")

const resetBtn = document.getElementById("resetBtn")

let count = 0;

const updateCounter = () => counter.textContent = count ;

incrementBtn.addEventListener("click" ,() =>{
    count++;
    updateCounter();
})

decrementBtn.addEventListener("click" ,() =>{
    count--;
    updateCounter();
})

resetBtn.addEventListener('click', () =>{
    count = 0;
    updateCounter();
})









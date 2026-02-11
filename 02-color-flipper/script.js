const colorCode = document.getElementById('colorCode');
const flipBtn = document.getElementById('flipBtn');
const bodyBackgroundColor = document.querySelector("body");

flipBtn.addEventListener("click",function(){
    let red = Math.floor(Math.random()*256).toString(16)
    let green = Math.floor(Math.random()*256).toString(16)
    let blue = Math.floor(Math.random()*256).toString(16)

    // #RRGGBB

    let randomColor = "#"+red+green+blue
    colorCode.innerHTML = `Background-Color: ${randomColor}`
    bodyBackgroundColor.style.backgroundColor = randomColor

    // console.log(randomColor)
    
})
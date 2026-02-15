const Display = document.getElementById("inputDisplay")

const valueAppend = (input) =>{
    Display.value += input;
}

const clearDis = ()=>{
    Display.value = "";
}

const evaluator = () =>{
    try{
        Display.value = eval(Display.value);
    }
    catch(err){
        Display.value = "Error"
        setTimeout(()=>{
             Display.value = "";
        },1000)
       
    }
}


const btn = document.getElementById("btn")
const textInput = document.getElementById("textInput")
const list = document.getElementById("list")

// btn.addEventListener("click",()=>{
//     console.log("text")
//     console.log(textInput.value)
    
    

// })

let todos = [];

btn.addEventListener("click",()=>{
    if(textInput.value){
        let value = textInput.value;
        addTodo(value.trim())
        textInput.value = "";
        displayList();

    }
    
})

const addTodo = (addItem) =>{
    if(addItem){
        todos.push({text:addItem , isDone : false})
    }
    
    
}

const displayList = ()=>{
    list.innerHTML = "";
    for(let i=0;i< todos.length ;i++){
        const li = document.createElement("li")
        const p = document.createElement("p")
        // const dBtn = document.createElement("button")

        p.textContent = todos[i].text;
        // deleteBtn.textContent = "Delete";

        li.appendChild(p)
        // li.appendChild(deleteBtn)
        list.appendChild(li)

        // console.log(todos[i].text)
        // list.innerHTML = `<li><p>${todos[i].text}</p></li>`
        
    }

}

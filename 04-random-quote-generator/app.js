let content = document.getElementById('content')
let author = document.getElementById('author')
let btn = document.getElementById('btn')

const URL = "https://dummyjson.com/quotes/random"


btn.addEventListener("click",async () =>{
    console.log("fetching...........")
    let res =  await fetch(URL)
    let data =  await res.json(res)
    // console.log(res)
    // console.log(data.author)
    // console.log(data.quote)
    content.textContent = `"${data.quote}"`
    author.textContent = `--${data.author}`
})

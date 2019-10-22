
const list = document.getElementById("list")

axios.get("https://api.vschool.io/grant/todo").then((response)=>{
    const todos = response.data
    console.log(todos)
    for(let i = 0; i < todos.length; i++){
        makeTodo(todos[i])
    }
})
        
function makeTodo(todo){

        const container = document.createElement("div")
        const h1 = document.createElement("h1")
        const h3 = document.createElement("h3")
        const h4 = document.createElement("h4")
        const p = document.createElement("img")
        
        h1.textContent = todo.title
        h3.textContent = todo.description
        h4.textContent = todo.price
        p.src = todo.imgUrl
    if (todo.completed){
        h1.style.textDecoration ="line-through"
    }    
        container.appendChild(h1)
        container.appendChild(h3)
        container.appendChild(h4)
        container.appendChild(p)
        list.appendChild(container)
}

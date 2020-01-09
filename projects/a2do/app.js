
axios.get("https://api.vschool.io/grant/todo")
    .then(res => {
        const allToDo = res.data
        // console.log('all', allToDo)
        for (let i = 0; i < allToDo.length; i++){
            createToDO(allToDo[i])
        }
    })
    .catch(error => console.log(error))

function createToDO(ToDo) {
    const list = document.getElementById("list")
    const div = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const h2 = document.createElement("h2")
    h1.textContent = ToDo.title
    p.textContent = ToDo.description
    h2.textContent = ToDo.price
    list.appendChild(div)
    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(h2)
 
}

const todoform = document.todoform

todoform.addEventListener("submit", function(event){
    event.preventDefault()
    
})
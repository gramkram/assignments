
const todoForm = document.todoForm
    

todoForm.addEventListener("submit", function(event){
    event.preventDefault()

    const newTodo = {
        task: todoForm.task.value 
    }
    axios.post("https://api.vschool.io/grant/todo", newTodo)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
})


axios.get("https://api.vschool.io/grant/todo")
    .then(response => {
        for(let i = 0; i < response.data.length; i++){
            const h1 = document.createElement('h1')
            h1.textContent = response.data[i].title
            document.body.appendChild(h1)
        }
    })
    .catch(error => console.log(error))
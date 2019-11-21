 function todoList(){
     var item = document.getElementById("todoInput").value 
     var text = document.createTextNode(item)
     var newItem = document.createElement("li")
     var del = document.createElement("button")
     del.textContent = "delete"
     newItem.appendChild(text)
     newItem.appendChild(del)
     document.getElementById("todoList").appendChild(newItem)
     del.addEventListener("click", function (){
         document.getElementById("todoList").removeChild(newItem)
     })
 } x
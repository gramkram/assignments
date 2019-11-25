const form = document["my-form"]

form.addEventListener("submit", function(event){
    event.preventDefault()

    const num1 = form.num1.value
    const num2 = form.num2.value


    const h1 = document.createElement('h1')
    h1.textContent = +num1 + +num2
    document.getElementsByTagName("form")[0].append(h1)
})  


form.addEventListener("submit", function(event){
    event.preventDefault()

    const num3 = form.num3.value
    const num4 = form.num4.value
    
    const h1 = document.createElement('h1')
    h1.textContent = num3 - num4
    document.getElementsByTagName("form")[0].append(h1)
})
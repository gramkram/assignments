const form = document.getElementById("multiply");

form.addEventListener('submit', function(event){
    event.preventDefault();
    const number= form.number.value
    const numberr= form.numberr.value
    console.log(form)
    const output= document.getElementById("finalAnswer")
    output.textContent = Number(number) + Number(numberr)
    console.log(+number * +numberr)
    console.log("fired")
});


// form put a listern for a on click event of the mouse/ sumbit,
// creat a function that takes place on the event 
// prevent the event from over occurring
// desturct the form to grab the num values *2 
// get the total  store the  in document byt the element id Final anwer
// do the math add it to the var
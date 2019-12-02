const nameForm = document.getElementById("name");
const dietaryForm = document.getElementById("dietary");

nameForm.addEventListener('submit', function(event){
    
    event.preventDefault();
    const firstName = nameForm.first.value
    const lastName = nameForm.secondValue.value
    const age = nameForm.age.value
    const gender = nameForm.gender.value
    const poi = nameForm.destination.value 
    const allergy = nameForm.allergy
    var diet = []
    for(let i=0; i < allergy.length;i++){
        if (allergy[i].checked){
            diet.push(allergy[i].value)
        }   
    }
    alert(
    `firstName: ${firstName }
    lastName: ${lastName}
    age: ${age}
    gender: ${gender}
    poi: ${poi}
    allergy: ${diet}
    `
    )
    // console.log(firstName, lastName, age,  poi, allergy)
    
});






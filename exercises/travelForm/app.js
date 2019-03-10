document.travelForm.addEventListener("submit", function(e) {
    e.preventDefault(); 
    let firstName = document.travelForm.firstName.value;
    let lastName = document.travelForm.lastName.value;
    let age = document.travelForm.age.value;
    let gender = document.travelForm.gender.value;
    let location = document.travelForm.location;
    let checkedLocation = []
        for (let i = 0; i < location.length; i++) {
            if(location[i].checked){
                checkedLocation.push(location[i].value)
            } 
            
        }
console.log(checkedLocation);

    let restriction = document.travelForm.restriction;
    let checkedRestriction = []
        for (let i = 0; i < restriction.length; i++) {
            if(restriction[i].checked){
                checkedRestriction.push(restriction[i].value)
            }
        
    }
console.log(checkedRestriction);

alert(
    `
    First Name: ${firstName} 
    Last Name: ${lastName}
    Age: ${age}
    Gender: ${gender}
    Location: ${checkedLocation.join(", ")}
    Dietary Restrictions: ${checkedRestriction.join(", ")}
    `)
});

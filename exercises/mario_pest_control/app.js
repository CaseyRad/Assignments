document.pestForm.addEventListener("submit", function(e){ 
    e.preventDefault();
  let goombaNumber =  parseInt(document.pestForm.goombaInput.value) * 5; 
  let bobNumber =  parseInt(document.pestForm.bobInput.value) * 7;
  let cheepNumber = parseInt(document.pestForm.cheepInput.value) * 11;
  let totalNumber = goombaNumber + bobNumber + cheepNumber; 
console.log(totalNumber);
let totalCoins = document.getElementById("totalCoins");
totalCoins.textContent = totalNumber 


})





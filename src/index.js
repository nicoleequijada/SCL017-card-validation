import validator from './validator.js';

let numberCredits = document.getElementById("number-credits");
let send = document.getElementById("send");



let getInputDate = function(event){
    event.preventDefault()
    let savedValue = numberCredits.value;
    
    let result = validator.isValid(savedValue);
    if(result === false){
        alert("ingresa un numero correcto")
    }
    
}
send.addEventListener('click', getInputDate, false);



 
 

console.log(validator);

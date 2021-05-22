import validator from './validator.js';

let numberCredits = document.getElementById("number-credits");
let send = document.getElementById("send");
console.log(numberCredits);


let getInputDate = function(event){
    event.preventDefault()
    let savedValue = numberCredits.value;
    console.log(savedValue);
    let result = validator.isValid(savedValue);
    if(result === false){
        alert("ingresa un numero correcto")
    }
}
send.addEventListener('click', getInputDate, false);



 
 

console.log(validator);

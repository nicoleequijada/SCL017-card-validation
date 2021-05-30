import validator from './validator.js';

let numberCredits = document.getElementById("number-credits");
console.log(numberCredits);
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


let keyEvent = function(event){
    console.log("funciona")
    // event.preventDefault()
    let hideNumbers = numberCredits.value;
    console.log(hideNumbers);

   let resultMaskify = validator.maskify(hideNumbers);
   console.log(resultMaskify);
   numberCredits.value = resultMaskify;


}
numberCredits.addEventListener('keypress', keyEvent, false);


 














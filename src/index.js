import validator from './validator.js';

let numberCredits = document.getElementById("number-credits");
console.log(numberCredits);
let send = document.getElementById("send");
let pureCreditCardNumber = [];




let getInputDate = function(event){
    event.preventDefault()
    let toStringPureCreditCardNumber = pureCreditCardNumber.join("");
    console.log(toStringPureCreditCardNumber);
    
    let result = validator.isValid(toStringPureCreditCardNumber);
    if(result === false){
        alert("ingresa un numero correcto")
    }
    
}

send.addEventListener('click', getInputDate, false);



let keyEvent = function(event){
    // el numero 8 es el keycode de la tecla de borrar
    if(event.keyCode === 8){
        pureCreditCardNumber.pop()
    }else{
        pureCreditCardNumber.push(event.key);
    }
    console.log(pureCreditCardNumber);
    event.preventDefault()
    let hideNumbers = numberCredits.value;

   let resultMaskify = validator.maskify(hideNumbers);
   numberCredits.value = resultMaskify;


}
numberCredits.addEventListener('keyup', keyEvent, false);

let blockPaste = function(event){
        event.preventDefault(); 
        alert("no se permite esta funcion");
}

numberCredits.addEventListener("paste", blockPaste, false)

 














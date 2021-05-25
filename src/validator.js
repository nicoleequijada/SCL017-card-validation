const validator = {
  isValid: function(creditCardNumber){
	  let numbersArray = creditCardNumber.split(""); 
    let turnedIntoNumber = parseInt(creditCardNumber);

		if(creditCardNumber ===" " || isNaN(turnedIntoNumber) || numbersArray.length != 16){
			return false;
    }else{
      for(var i = 0; i < numbersArray.length; i++){
        if(i % 2 == 0){
          // console.log(numbersArray[i])
          let numberTwo = numbersArray[i]*2;
          // console.log(numberTwo);
          if(numberTwo >= 10){
            let toString = numberTwo.toString();
            let divide = toString.split("");
            console.log(divide);
            let suma = parseInt(divide[0]) + parseInt(divide[1]);
            console.log(suma);
          }
        }else{
            let anotherNumbers = numbersArray[i];
          }  

          }
          // hacer un acumulador, definirlo afuera y detro for sumar
        }
      }
    } 
    


export default validator;



const validator = {
  isValid: function(creditCardNumber){
	  let numbersArray = creditCardNumber.split(""); 
	  console.log(numbersArray);
		let turnedIntoNumber = parseInt(creditCardNumber);

		if(creditCardNumber ===" " || isNaN(turnedIntoNumber)){
			alert("Ingresa un numero valido");
    }
  }  
}

export default validator;

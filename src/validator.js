const validator = {
  isValid: function(creditCardNumber){
	  let numbersArray = creditCardNumber.split(""); 
	  console.log(numbersArray);
		let turnedIntoNumber = parseInt(creditCardNumber);

		if(creditCardNumber ===" " || isNaN(turnedIntoNumber) || numbersArray.length != 16){
			return false;
    }else{
      return true
    }
    
  }  
}

export default validator;

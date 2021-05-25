const validator = {
  isValid: function(creditCardNumber){
	  let numbersArray = creditCardNumber.split(""); 
    let turnedIntoNumber = parseInt(creditCardNumber);

		if(creditCardNumber ===" " || isNaN(turnedIntoNumber) || numbersArray.length != 16){
			return false;
    }else{
      for(var i = 1; i < numbersArray.length; i++){
        if(i % 2 == 0){
          // console.log(numbersArray[i])
          let numberTwo = numbersArray[i]*2;
          console.log(numberTwo);
          if(numberTwo >= 10){
          //  let divide = numberTwo.split("");
          //  console.log(divide);
            
          }
      
        }
      }
    } 
    
  } 

} 

export default validator;



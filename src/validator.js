const validator = {
  isValid: function(creditCardNumber){
	  let numbersArray = creditCardNumber.split(""); 
    let turnedIntoNumber = parseInt(creditCardNumber);
    let accumulator = 0;
    let suma = 0;

		if(creditCardNumber ===" " || isNaN(turnedIntoNumber) || numbersArray.length != 16){
			return false;
    }else{
      for(var i = 0; i < numbersArray.length; i++){
        console.log(accumulator);
        if(i % 2 == 0){
          let numberTwo = numbersArray[i]*2;

          if(numberTwo >= 10){
            let toString = numberTwo.toString();
            let divide = toString.split("");
            suma = parseInt(divide[0]) + parseInt(divide[1]); 
            accumulator = accumulator + suma;
            
          }else{
            accumulator = accumulator +  numberTwo;
          
          }
        }else{
           accumulator = accumulator + parseInt(numbersArray[i]);
        
           
          }    
        }
          if(accumulator % 10 == 0){
            alert("tarjeta valida");
          }else{
            alert("tarjeta invalida")
          }
        }
      }
    } 
    


export default validator;



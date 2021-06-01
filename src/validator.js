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
            alert("tarjeta valida, Su compra se realizo correctamente");
          }else{
            alert("tarjeta invalida, intente con otra tarjeta")
          }
        }
      },

      

      maskify(creditCardNumber){
        creditCardNumber = creditCardNumber.split("");
        for( var i = 0; i < creditCardNumber.length; i++){
          creditCardNumber[i] = creditCardNumber[i];
        }
        let numbHide =[];
        for (var i = 0; i < creditCardNumber.length; i++){
          if(i < creditCardNumber.length-4){
            numbHide.push('#');
           
          }else{
            numbHide.push(creditCardNumber[i]);
          }
          
             
        }
        return numbHide.join("");
      }

    } 
    
    


export default validator;



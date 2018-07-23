
var button= document.querySelector(".btn");
var answer= document.getElementById("display");
var calculator=document.querySelector("form");
var operator= document.querySelector(".operator");
var result = calculator.answer;

// when the user click a button, invoke the function display and 
// passing the value of button as agruments to the function and 
// stores the value of each button in the calculator.answer.value.
function display(btn){
   return result.value+= event.target.value;
}
//checking the condition
function calculations(btn){
	if(event.target.value==="="){
		result.value=eval(result.value);
		// The eval() method evaluates or executes an argument.
		// If the argument is an expression, eval() evaluates the expression. 
		// If the argument is one or more JavaScript statements, eval() executes the statements
	}else if(event.target.value==="C"){
		  result.value="";
	}else if(event.target.value==="Del"){
		 result.value= result.value.slice(0,-1);
	}else{
          result.value=Math.sqrt(result.value);
	}

	}


button.addEventListener("click",display);
operator.addEventListener("click",calculations);
	
// 	 calculator.answer.value= calculator.answer.value.slice(0,-1);

// 	 // slice() extracts a part of a string and returns the extracted 
// 	 // part in a new string.
//   //    The method takes 2 parameters: the starting index (position), 
//   //    and the ending index (position).
//   //    This example slices out a portion of a string from position 
//   //    7 to position 13:
//   //    If a parameter is negative, the position is counted from the
//   //     end of the string. 
// }

// // create a square root function
// function square(btn){
// calculator.answer.value = Math.sqrt(calculator.answer.value);
// }

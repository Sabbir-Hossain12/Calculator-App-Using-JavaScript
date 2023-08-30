'use strict';

//  update the value of the input field (display) of the calculator when a button is clicked.
function Append(value)
{
// (+=) This operator is used to add the value of the clicked button to the current value of the input field.
 document.querySelector('#result').value +=  value;
}


// Reset the Output display by assigning the input value null.
function ClearResult()
{
  document.querySelector('#result').value =  '';
}


// Final Calculation using eval() Function
function FinalResult()
{
  // eval() function is used to evaluate the mathematical expression entered by the user.
  const result = eval(document.getElementById('result').value);
  document.getElementById('result').value= result;

}


// BackSpace Functionality to Calculator
function BackSpace()
{
 let y= document.getElementById('result').value;
//The operation is used to remove the last character from the current value
 document.getElementById('result').value= y.slice(0,-1);

}

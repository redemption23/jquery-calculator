'use strict';
$(document).ready(function(){
  var calcScreen = $('#screen');
  var operand = $('span');
  var operator = $('.operator');
  var clear = $('#clear');
  var equals = $('#equals');

  // click operand or operator and append the corresponding text to the screen

  operand.on('click', function(){
    if ($(this).text() === 'C' || $(this).text() === '=') {
      clear.on('click', function(){
      calcScreen.empty();
      });
    } else {
      calcScreen.append($(this).text());
    }
  });

  // if the screen displays the message 'Error', don't append anything


  // click the clear button to remove all the text from the screen

  equals.on('click', function(){
    try {
      var answer = eval(replaceStr(calcScreen.text()));
      calcScreen.empty();
      calcScreen.append(answer);
    } catch(e) {
      calcScreen.empty();
      calcScreen.append('ERROR');
    }
  });

  // click the `equals` button to evaluate the arithmetic expression shown in the screen.


  // if the expression is in format `operand(+|-|x|÷)operand`, evaluate the expression and update the screen with the result.

  // if the expression isn't in the correct format or when attempting to divide by zero, update the screen with the message `Error`.

  function replaceStr(str) {
    str = str.replace('÷', '/');
    str = str.replace('x', '*');
    return str;
  }
});

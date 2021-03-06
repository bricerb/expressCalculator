const express = require('express');
const app = express();

app.get('/:calc/:num1/:num2', function(req, res) {
  var calc = req.params.calc,
  num1 = parseInt(req.params.num1),
  num2 = parseInt(req.params.num2),
  result = 0;

  switch(calc){
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num2 - num1;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'pow':
      result = Math.pow(num1, num2);
      break;
    default:
      result = "Incorrect Input...";
      break;
  }
  // if (calc === 'add') {
  //   result = num1 + num2;
  // } else if (calc === 'subtract') {
  //   result = num2 - num1;
  // } else if (calc === 'multiply') {
  //   result = num2 * num1;
  // } else if (calc === 'divide') {
  //   result = num1 / num2;
  // } else if (calc === 'pow') {
  //   result = Math.pow(num1, num2);
  // } else {
  //   result = "Incorrect Input...";
  // }
  res.send(result.toString());
})

app.listen(3000, function() {
  console.log('Ready to Calculate');
})

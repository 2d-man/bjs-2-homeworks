"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d;

  d = b**2 - 4*a*c;
  if (d == 0){
    arr.push(-b/(2*a));
  }
  else if (d > 0){
    arr.push((-b + Math.sqrt(d) )/(2*a));
    arr.push((-b - Math.sqrt(d) )/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let sum = 0;
  let payment = 0;

  percent = percent / 100 / 12;
  sum = amount - contribution;
  payment = sum * (percent + (percent / (((1 + percent)**countMonths) - 1)));
  sum = payment * countMonths;

  return Number(sum.toFixed(2));
}
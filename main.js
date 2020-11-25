/*1*/
function palindrome(p) {
  for (i = (p.length); i--; i != 0) {
    for (j = 0; j < p.length; j++) {
      if (p[i] == p[j]) {
        return true;
      }
      return false;
    }
  }
}
console.log(palindrome('шалаш'));
console.log(palindrome('кок'));
console.log(palindrome('антон'));

/*2*/
function min(a, b) {
  if (a < b) {
    return a;
  }
  return b;
}

function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

console.log(min(3, 4));
console.log(max(5, 6));


function maxMin(a, b) {
  return a > b ? a : b;
}

console.log(maxMin(5, 4));


/*3*/


const myArr = [];

let myFunction = function (arr) {
  for (i = 0; i < 100; i++) {
    myArr.push(Math.round(Math.random() * i));
  }
  console.log(myArr);
  for (i = 0; i < arr.length; i++) {
    let arrSymbol = arr[i].toString();
    if (arrSymbol.endsWith('0')) {
      arrSymbol = arrSymbol.replace('0', 'zero');
      arr[i] = arrSymbol;
    }
  }
  console.log(arr);
}

myFunction(myArr);












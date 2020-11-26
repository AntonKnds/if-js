
function newPalindrome(word) {
  let newWord = word.split("").reverse();
    for ( i = 0; i < newWord.length; i++) {
      if (word[i] === newWord [i]) {
        return true;
      } return false;
    }
}


console.log(newPalindrome("anttna"));
console.log(newPalindrome("oanttnoa"));

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

/* lesson-4 */

/*1*/

function sum(a) {
  return function (b) {
    return a + b;
  }
}
console.log(sum(5)(4));

/*2*/
const text1El = document.getElementById("text1");
const text2El = document.getElementById("text2");
const text3El = document.getElementById("text3");

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

text1El.addEventListener('click', addCounter());
text2El.addEventListener('click', addCounter());
text3El.addEventListener('click', addCounter()) ;

function addCounter() {
  let counter = 0;
  return function() {
    if(counter < 4) {
      counter ++;
      return this.style.color = colors[counter];
    } counter = 0;
  }
}










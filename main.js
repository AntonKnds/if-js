let user = "John Doe";
console.log(user);
const student = "Anton";
console.log(student);
user = student;
console.log(user); /* output Anton */

let test = 1;
test += 1;
console.log(test); /*output 2*/
test -= 1;
console.log(test); /*output 1*/
test = " ";
console.log(!!test); /*output true*/


const arr = [2, 3, 5, 8];
let result = 1;
for (i = 0; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result);

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (i=0; i<arr2.length; i++ ) {
    if (arr2[i] > 5 && arr2[i] < 10) {
        console.log(arr2[i]);
    }
}

const arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (i=0; i<arr3.length; i++ ) {
    if ((arr3[i] % 2) === 0 && arr3[i] !== 0 ) {
        console.log(arr3[i]);
    }
}






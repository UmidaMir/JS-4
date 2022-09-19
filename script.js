// HW
// a

var a = prompt("Введите свое имя");
var b = +prompt("Введите свой год рождения");
var c = +prompt("Введите нынешний год");

function result(a, b, c) {
  let plus = a + " Ваш возраст " + (c - b);
  return plus;
}

alert (result(a, b, c));


// b

do{
    var num = +prompt('Введите число');
}
while (isNaN(num));


 function random1(min, max) {
   return Math.floor(Math.random() * (max - min) + min)
 }
 function symbol() {
   return Math.floor(Math.random() * (4 - 1) + 1)
 }
 
 for (let i = 0; i < num; i++) {
 let num1 = random1(1, 20);
 let num2 = random1(1, 20);
 let symbols = symbol();
 let example = 0;
 
 if (symbols == 1) {
    example = num1 + num2;
    symbols = '+';
 }
 else if(symbols == 2){
    example = num1 - num2;
    symbols = '-';
 }
 else if(symbols == 3){
    example = num1 * num2;
    symbols = '*';
 }
 else if(symbols == 4){
    example = num1 / num2;
    symbols = '/';
 }
 
 let answer = +prompt(num1 + symbols + num2);
 document.write(example == answer ?  ' your are right - ' + ' ' + answer: ' your are wrong! answer is -'+ ' ' + example);
 
 }
let input= +prompt("Enter number");;
let total = 0;

//for (let total = 0; input !== 0; total += input)
  //  {}

//if (input = ) {
//    console.log(total);
//} else {
//    alert('Было введено не число, попробуйте еще раз');
//}
do {
    input = +prompt("Enter number");
    if (isFinite(input)) {
        total += input;
        //total= input+input;
        //console.log(total);
    } else {
        alert('Было введено не число, попробуйте еще раз');
    }
} while (input !== 0);
alert('Общая сумма чисел равна'  +  '  ' + (total));

//while (input !== '') {
 //}
console.log(total);


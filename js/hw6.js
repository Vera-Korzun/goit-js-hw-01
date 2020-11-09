let input;
let total = 0;

//if (input = ) {
//    console.log(total);
//} else {
//    alert('Было введено не число, попробуйте еще раз');
//}
do {
    input = +prompt("Enter number");
    if (isFinite(input)) {
        total += input;
        //console.log(total);
    } else {
        alert('Было введено не число, попробуйте еще раз');
    }
} while (input !== 0);
alert('Общая сумма чисел равна'  +  '  ' + (total));

//while (input !== '') {
 //}
//console.log(total);
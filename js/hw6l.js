let total = 0;
while (2 + 2 == 4) {
    let input = prompt("enter number");

    if (input === null) {
        alert(`Total sum ${total}`);
        break;
    }
    input = Number(input);

    total += input;
}


//на for
function sumOfTwoNumbers(input) {

    let y1 = Number(input[0]);
    let y2 = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinations = 0;
    let isFound = false;

    for (let x1 = y1; x1 <= y2; x1++) {
        for (x2 = y1; x2 <= y2; x2++) {
            combinations++;
            let sum = x1 + x2;
            if (sum === magicNumber) {
                isFound = true;
                y1 = x1;
                y2 = x2;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (isFound) {
        console.log(`Combination N:${combinations} (${y1} + ${y2} = ${magicNumber})`);
    } else {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }
}
sumOfTwoNumbers(["88","888","2000"]);
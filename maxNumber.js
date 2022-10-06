function maxNumber(input) {

    let index = 0;
    let command = input[index];
    index++;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {
        newNum = Number(command);

        if (newNum > maxNum) {
            maxNum = newNum;
        }
        command = input[index];
        index++;
    }
    console.log(maxNum);
}
maxNumber(["-1",
    "-2",
    "Stop"])
function minNumber(input) {

    let index = 0;
    let command = input[index];
    index++;
    let minNum = Number.MAX_SAFE_INTEGER;

    while (command !== "Stop") {
        newNum = Number(command);

        if (newNum < minNum) {
            minNum = newNum;
        }
        command = input[index];
        index++;
    }
    console.log(minNum);
}
minNumber(["-1",
    "-2",
    "Stop"])

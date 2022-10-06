function numbersDivisibleBy9(input) {
    let numMin = Number(input[0]);
    let numMax = Number(input[1]);
    let sum = 0
    let printNum = "";
    for (let i = numMin; i <= numMax; i++) {
        if (i % 9 === 0) {
            sum += i;
            printNum += `${i}\n`;
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(printNum);
}
numbersDivisibleBy9(["100", "200"])
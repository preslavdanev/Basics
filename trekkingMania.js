function trekkingMania(input) {

    let groupsCount = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let peopleCount = 0

    for (let i = 1; i <= groupsCount; i++) {
        currentNumber = Number(input[i]);
        if (currentNumber <= 5) {
            p1 += currentNumber;
            peopleCount += currentNumber;
        } else if (currentNumber <= 12) {
            p2 += currentNumber;
            peopleCount += currentNumber;
        } else if (currentNumber <= 25) {
            p3 += currentNumber;
            peopleCount += currentNumber;
        } else if (currentNumber <= 40) {
            p4 += currentNumber;
            peopleCount += currentNumber;
        } else if (currentNumber >= 41) {
            p5 += currentNumber;
            peopleCount += currentNumber;
        }
    }
    console.log(`${(p1 / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(p2 / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(p3 / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(p4 / peopleCount * 100).toFixed(2)}%`);
    console.log(`${(p5 / peopleCount * 100).toFixed(2)}%`);
}
trekkingMania(["5",
    "25",
    "41",
    "31",
    "250",
    "6"])
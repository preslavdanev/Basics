function oscars(input) {
    let name = input[0];
    let pointsFromAcad = Number(input[1]);

    for (let index = 3; index < input.length; index++) {
        if (index % 2 !== 0) {
            let points = index + 1;
            let total = input[index].length * Number(input[points]) / 2;
            pointsFromAcad += total;
        }
        if (pointsFromAcad > 1250.5) {
            break
        }
    }
    if (pointsFromAcad < 1250.5) {
        console.log(`Sorry, ${name} you need ${(1250.5 - pointsFromAcad).toFixed(1)} more!`);
    } else {
        console.log(`Congratulations, ${name} got a nominee for leading role with ${(pointsFromAcad).toFixed(1)}!`);
    }
}
oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
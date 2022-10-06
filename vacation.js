function vacation(input) {

    let moneyNeeded = Number(input[0]);
    let startingMoney = Number(input[1]);
    let index = 2;
    let command = input[index];
    let saveDay = 0;
    let spendDay = 0;

    while (startingMoney < moneyNeeded) {
        saveDay++;
        index++
        if (command === "spend") {
            spendDay++
            if (spendDay === 5) {
                console.log(`You can't save the money.`);
                console.log(`${saveDay}`);
                break;
            }
            let money = Number(input[index]);
            startingMoney -= money;
            if (startingMoney < 0) {
                startingMoney = 0;
            }
        } else if (command === "save") {
            spendDay = 0;
            money = Number(input[index]);
            startingMoney += money;
        }
        index++;
        command = input[index];
    }
    if (startingMoney >= moneyNeeded) {
        console.log(`You saved the money for ${saveDay} days.`);
    }
}
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])


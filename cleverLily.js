function cleverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);
    let moneySaved = 0;
    let toysCounter = 0;
    let stolenMoney = 0;
    let addedMoney = 10;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            stolenMoney++;
            moneySaved += addedMoney;
            addedMoney += 10;
        } else {
            toysCounter++;
        }
    }
    let totalMoneyFromToys = toysCounter * singleToyPrice;
    let total = (totalMoneyFromToys + moneySaved) - stolenMoney;
    if (total >= washingMachinePrice) {
        console.log(`Yes! ${(total - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - total).toFixed(2)}`);
    }
}
cleverLily(["21",
    "1570.98",
    "3"]);
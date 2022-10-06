function cinema(input) {

    let type = input[0];
    let countRedove = Number(input[1]);
    let countKoloni = Number(input[2]);
    let income = 0;
    let totalChairs = countKoloni * countRedove;

    switch (type) {
        case 'Premiere': income = totalChairs * 12;
            console.log(`${(income).toFixed(2)} leva`);
            break
        case 'Normal': income = totalChairs * 7.50;
            console.log(`${(income).toFixed(2)} leva`);
            break
        case 'Discount': income = totalChairs * 5;
            console.log(`${(income).toFixed(2)} leva`);
            break
    }
}
cinema(["Discount",
    "12",
    "30"])


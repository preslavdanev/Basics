function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let priceStudio = 0
    let priceApart = 0

    if (month === 'May' || month === 'October') {
        if (nights <= 7) {
            priceStudio = 50 * nights;
            priceApart = 65 * nights;
            console.log(`Apartment: ${(priceApart).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
        } else if (nights > 7 && nights <= 14) {
            priceStudio = ((50 * nights) * 0.95);
            priceApart = 65 * nights;
            console.log(`Apartment: ${(priceApart).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
        } else if (nights > 14) {
            priceStudio = ((50 * nights) * 0.70);
            priceApart = (65 * nights) * 0.90;
            console.log(`Apartment: ${(priceApart).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
        }
    } else if (month === 'June' || month === 'September') {
        if (nights <= 14) {
            priceStudio = 75.20 * nights;
            priceApart = 68.70 * nights;
            console.log(`Apartment: ${(priceApart).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
        } else if (nights > 14) {
            priceStudio = ((75.20 * nights) * 0.80);
            priceApart = (68.70 * nights) * 0.90;
            console.log(`Apartment: ${(priceApart).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
        }
    } else if (month === 'July' || month === 'August') {
        if (nights <= 14) {
            priceStudio = 76 * nights;
            priceApart = 77 * nights;
            console.log(`Apartment: ${(priceApart).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
        } else if (nights > 14) {
            priceStudio = 76 * nights;
            priceApart = (77 * nights) * 0.90;
            console.log(`Apartment: ${(priceApart).toFixed(2)} lv.`);
            console.log(`Studio: ${(priceStudio).toFixed(2)} lv.`);
        }
    }
}
hotelRoom(["May", "6"]);
function skiTrip(input) {

    let days = Number(input[0]);
    let typeRoom = input[1];
    let feedback = input[2];
    let nights = days - 1;
    let totalPrice = 0
    let priceAfterDiscount = 0

    switch (feedback) {
        case 'positive':
            if (typeRoom === 'room for one person') {
                totalPrice = ((nights * 18.00) * 1.25).toFixed(2);
                console.log(totalPrice);
            } else if (typeRoom === 'apartment') {
                if (nights < 10) {
                    totalPrice = ((nights * 25.00) * 0.70);
                    priceAfterDiscount = (totalPrice * 1.25).toFixed(2);
                    console.log(priceAfterDiscount);
                } else if (nights >= 10 && nights <= 15) {
                    totalPrice = ((nights * 25.00) * 0.65);
                    priceAfterDiscount = (totalPrice * 1.25).toFixed(2);
                    console.log(priceAfterDiscount);
                } else if (nights > 15) {
                    totalPrice = ((nights * 25.00) * 0.50);
                    priceAfterDiscount = (totalPrice * 1.25).toFixed(2);
                    console.log(priceAfterDiscount);
                }
            } else if (typeRoom === 'president apartment') {
                if (nights < 10) {
                    totalPrice = ((nights * 35.00) * 0.90);
                    priceAfterDiscount = (totalPrice * 1.25).toFixed(2);
                    console.log(priceAfterDiscount);
                } else if (nights >= 10 && nights <= 15) {
                    totalPrice = ((nights * 35.00) * 0.85);
                    priceAfterDiscount = (totalPrice * 1.25).toFixed(2);
                    console.log(priceAfterDiscount);
                } else if (nights > 15) {
                    totalPrice = ((nights * 35.00) * 0.80);
                    priceAfterDiscount = (totalPrice * 1.25).toFixed(2);
                    console.log(priceAfterDiscount);
                }
            } break
        case 'negative':
            if (typeRoom === 'room for one person') {
                totalPrice = ((nights * 18.00) * 0.90).toFixed(2);
                console.log(totalPrice);
            } else if (typeRoom === 'apartment') {
                if (nights < 10) {
                    totalPrice = ((nights * 25.00) * 0.70);
                    priceAfterDiscount = (totalPrice * 0.90).toFixed(2);
                    console.log(priceAfterDiscount);
                } else if (nights >= 10 && nights <= 15) {
                    totalPrice = ((nights * 25.00) * 0.65);
                    priceAfterDiscount = (totalPrice * 0.90).toFixed(2);
                    console.log(priceAfterDiscount);
                } else if (nights > 15) {
                    totalPrice = ((nights * 25.00) * 0.50);
                    priceAfterDiscount = (totalPrice * 0.90).toFixed(2);
                    console.log(priceAfterDiscount);
                }
            } else if (typeRoom === 'president apartment') {
                if (nights < 10) {
                    totalPrice = ((nights * 35.00) * 0.90);
                    priceAfterDiscount = (totalPrice * 0.90).toFixed(2);
                    console.log(priceAfterDiscount);
                } else if (nights >= 10 && nights <= 15) {
                    totalPrice = ((nights * 35.00) * 0.85);
                    priceAfterDiscount = (totalPrice * 0.90).toFixed(2);
                    console.log(priceAfterDiscount);
                } else if (nights > 15) {
                    totalPrice = ((nights * 35.00) * 0.80);
                    priceAfterDiscount = (totalPrice * 0.90).toFixed(2);
                    console.log(priceAfterDiscount);
                }
            } break
    }
}
skiTrip(["30", "president apartment", "negative"]);
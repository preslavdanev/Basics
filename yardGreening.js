function yardGreening(input){
    let price = Number([7.61]);
    let discount = Number([0.18]);
    let price1 = (input[0])*price;
    let price2 = discount*price1;
    let price3 = price1 - price2;
    console.log(`The final price is: ${price3} lv.`);
    console.log(`The discount is: ${price2} lv.`)
    
}

yardGreening([550])
function petShop(input){
    let dogFoodPrice = Number([2.50]);
    let catFoodPrice = Number([4]);
    let dogTotal = dogFoodPrice*input[0];
    let catTotal = catFoodPrice*input[1];
    let total = dogTotal+catTotal;
    console.log(`${total} lv`)

}

petShop([5,4])
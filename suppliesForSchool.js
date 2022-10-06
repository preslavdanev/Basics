function suppliesForSchool(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liquid = Number(input[2]);
    let discount = Number(input[3]);
    let finalPriceForPens = pens * 5.80;
    let finalPriceForMarkers = markers * 7.20;
    let finalPriceForLiquid = liquid * 1.20;
    let finalPrice = finalPriceForPens + finalPriceForMarkers + finalPriceForLiquid;
    let priceAfterDiscount = finalPrice - (finalPrice * (discount / 100));
    console.log(priceAfterDiscount)
}
suppliesForSchool(["2","3","4","25"])

function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];
    let outfit = 0
    let shoes = 0

    if (degrees >= 10 && degrees <= 18) {
        if (timeOfDay == 'Morning') {
            outfit = 'Sweatshirt';
            shoes = 'Sneakers';
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        } else if (timeOfDay == 'Afternoon') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        } else {
            outfit = 'Shirt';
            shoes = 'Moccasins';
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
    } else if (degrees > 18 && degrees <= 24) {
        if (timeOfDay == 'Morning') {
            outfit = 'Shirt';
            shoes = 'Moccasins';
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        } else if (timeOfDay == 'Afternoon') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        } else {
            outfit = 'Shirt';
            shoes = 'Moccasins';
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
    } else if (degrees >= 25) {
        if (timeOfDay == 'Morning') {
            outfit = 'T-Shirt';
            shoes = 'Sandals';
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        } else if (timeOfDay == 'Afternoon') {
            outfit = 'Swim Suit';
            shoes = 'Barefoot';
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        } else {
            outfit = 'Shirt';
            shoes = 'Moccasins';
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
    }
}

summerOutfit(["28",
"Evening"])

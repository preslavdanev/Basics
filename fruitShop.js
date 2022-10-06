function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let count = Number(input[2]);

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit === "banana") {
                console.log((count * 2.50).toFixed(2));
            } else if (fruit === "apple") {
                console.log((count * 1.20).toFixed(2));
            } else if (fruit === "orange") {
                console.log((count * 0.85).toFixed(2));
            } else if (fruit === "grapefruit") {
                console.log((count * 1.45).toFixed(2));
            } else if (fruit === "kiwi") {
                console.log((count * 2.70).toFixed(2));
            } else if (fruit === "pineapple") {
                console.log((count * 5.50).toFixed(2));
            } else if (fruit === "grapes") {
                console.log((count * 3.85).toFixed(2));
            } else {
                console.log("error");
            } break
        case "Saturday":
        case "Sunday":
            if (fruit === "banana") {
                console.log((count * 2.70).toFixed(2));
            } else if (fruit === "apple") {
                console.log((count * 1.25).toFixed(2));
            } else if (fruit === "orange") {
                console.log((count * 0.90).toFixed(2));
            } else if (fruit === "grapefruit") {
                console.log((count * 1.60).toFixed(2));
            } else if (fruit === "kiwi") {
                console.log((count * 3.00).toFixed(2));
            } else if (fruit === "pineapple") {
                console.log((count * 5.60).toFixed(2));
            } else if (fruit === "grapes") {
                console.log((count * 4.20).toFixed(2));
            } else {
                console.log("error");
            } break
        default: console.log("error");
    }
}
fruitShop(["tomato", "Monday", "0.5"]);
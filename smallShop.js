function smallShop(input) {

    let drink = input[0];
    let city = input[1];
    let count = Number(input[2]);

    switch (city) {
        case "Sofia":
            switch (drink) {
                case "coffee": console.log(count * 0.50); break
                case "water": console.log(count * 0.80); break
                case "beer": console.log(count * 1.20); break
                case "sweets": console.log(count * 1.45); break
                case "peanuts": console.log(count * 1.60); break
            }break
        case "Plovdiv":
            switch (drink) {
                case "coffee": console.log(count * 0.40); break
                case "water": console.log(count * 0.70); break
                case "beer": console.log(count * 1.15); break
                case "sweets": console.log(count * 1.30); break
                case "peanuts": console.log(count * 1.50); break
            }break
        case "Varna":
            switch (drink) {
                case "coffee": console.log(count * 0.45); break
                case "water": console.log(count * 0.70); break
                case "beer": console.log(count * 1.10); break
                case "sweets": console.log(count * 1.35); break
                case "peanuts": console.log(count * 1.55); break
            }break
    }
}
smallShop(["sweets", "Sofia", "2.23"]);
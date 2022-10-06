function tradeCommissions(input) {

    let city = input[0];
    let sells = Number(input[1]);
    let commision = 0

    switch (city) {
        case "Sofia":
            if (sells >= 0 && sells <= 500) {
                commision = (sells * 0.05).toFixed(2);
                console.log(commision);
            } else if (sells > 500 && sells <= 1000) {
                commision = (sells * 0.07).toFixed(2);
                console.log(commision);
            } else if (sells > 1000 && sells <= 10000) {
                commision = (sells * 0.08).toFixed(2);
                console.log(commision);
            } else if (sells > 10000) {
                commision = (sells * 0.12).toFixed(2);
                console.log(commision);
            } else {
                console.log("error");
            } break
        case "Varna":
            if (sells >= 0 && sells <= 500) {
                commision = (sells * 0.045).toFixed(2);
                console.log(commision);
            } else if (sells > 500 && sells <= 1000) {
                commision = (sells * 0.075).toFixed(2);
                console.log(commision);
            } else if (sells > 1000 && sells <= 10000) {
                commision = (sells * 0.10).toFixed(2);
                console.log(commision);
            } else if (sells > 10000) {
                commision = (sells * 0.13).toFixed(2);
                console.log(commision);
            } else {
                console.log("error");
            } break
        case "Plovdiv":
            if (sells >= 0 && sells <= 500) {
                commision = (sells * 0.055).toFixed(2);
                console.log(commision);
            } else if (sells > 500 && sells <= 1000) {
                commision = (sells * 0.08).toFixed(2);
                console.log(commision);
            } else if (sells > 1000 && sells <= 10000) {
                commision = (sells * 0.12).toFixed(2);
                console.log(commision);
            } else if (sells > 10000) {
                commision = (sells * 0.145).toFixed(2);
                console.log(commision);
            } else {
                console.log("error");
            } break
        default:
            console.log("error");
    }
}
tradeCommissions(["Kaspichan", "-50"]);
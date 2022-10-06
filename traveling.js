function traveling(input) {

    let city = input[0];
    let budget = Number(input[1]);
    let index = 2;
    let command = input[index];
    let moneySaved = 0;

    while (command !== "End") {
        let cash = Number(command);
        moneySaved += cash;
        if (moneySaved >= budget) {
            console.log(`Going to ${city}!`);
            moneySaved = 0;
            city = input[++index];
            if (city === "End") {
                break;
            }
            budget = input[++index];
        }
        command = input[++index];
    }
}
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);
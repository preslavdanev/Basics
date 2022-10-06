function password(input) {

    let user = input[0];
    let pass = input[1];
    index = 2
    let tryPass = input[index];
    index++

    while (tryPass !== pass) {
        tryPass = input[index];
        index++;
    }
    console.log(`Welcome ${user}!`);
}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
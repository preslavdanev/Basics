function cake(input) {

    let l = Number(input[0]);
    let h = Number(input[1]);
    let cakeSize = l * h;
    let pieceSize = 1 * 1;
    let index = 2;
    let command = input[index];

    while (command !== "STOP") {
        let pieceTaken = Number(command);
        cakeSize -= pieceTaken;

        if (cakeSize < 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            break;
        }
        index++;
        command = input[index];
    }
    if (cakeSize > 0)
        console.log(`${cakeSize} pieces are left.`);
}
cake(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])
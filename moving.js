function moving(input) {

    let l = Number(input[0]);
    let h = Number(input[1]);
    let w = Number(input[2]);
    let roomSize = l * h * w;
    let boxSize = 1 * 1 * 1;
    let index = 3;
    let command = input[index];

    while (command !== "Done") {
        let sizeTaken = Number(command);
        sizeTaken = sizeTaken * boxSize;
        roomSize -= sizeTaken;

        if (roomSize < 0) {
            console.log(`No more free space! You need ${Math.abs(roomSize)} Cubic meters more.`);
            break;
        }
        index++;
        command = input[index];
    }
    if (roomSize > 0) {
        console.log(`${roomSize} Cubic meters left.`);
    }
}
moving(["10",
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);
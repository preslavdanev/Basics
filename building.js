function building(input) {

    let floor = Number(input[0]);
    let rooms = Number(input[1]);

    for (let x = floor; x >= 1; x--) {
        let buff = ""
        for (let y = 0; y < rooms; y++) {
            if (x === floor) {
                buff += "L" + x + y + " ";
            } else if (x % 2 === 0) {
                buff += "O" + x + y + " ";
            } else {
                buff += "A" + x + y + " ";
            }
        }
        console.log(buff);
    }
}
building(["4", "4"])
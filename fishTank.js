function fishTank(input) {
    let dylyg = Number(input[0]);
    let shirok = Number(input[1]);
    let visok = Number(input[2]);
    let percent = Number(input[3]);
    let obem = dylyg * shirok * visok;
    let obemLitri = obem / 1000;
    let zaetoProst = obemLitri * (1 - (percent / 100));

    console.log(zaetoProst)
}

fishTank(["85", "75", "47", "17"])
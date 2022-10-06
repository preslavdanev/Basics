function histogram(input) {

    let long = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= long; i++) {
        currentNumber = Number(input[i]);
        if (currentNumber < 200) {
            p1++;
        } else if (currentNumber <= 399) {
            p2++;
        } else if (currentNumber <= 599) {
            p3++;
        } else if (currentNumber <= 799) {
            p4++;
        } else if (currentNumber >= 800) {
            p5++;
        }
    }
    console.log(`${(p1 / long * 100).toFixed(2)}%`);
    console.log(`${(p2 / long * 100).toFixed(2)}%`);
    console.log(`${(p3 / long * 100).toFixed(2)}%`);
    console.log(`${(p4 / long * 100).toFixed(2)}%`);
    console.log(`${(p5 / long * 100).toFixed(2)}%`);
}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])
;
function test(input) {

    let x1 = Number(input[0]);
    let x2 = Number(input[1]);
    let x3 = Number(input[2]);
    let result = '';
    let i = 1;
    let j = 1;
    let k = 1;


    while (i <= x1) {

        j = 1;
        while (j <= x2) {

            k = 1;
            while (k <= x3) {
                if (i % 2 === 0 && (j === 2 || j === 3 || j === 5 || j === 7) && k % 2 === 0) {
                    result += `${i} ${j} ${k}\n`
                }
                k++;
            }
            j++;
        }
        i++;
    }

    console.log(result);

}
test(["3",
    "5",
    "5"])

function sequence2K1(input) {

    let n = Number(input[0]);
    let a = 1;

    while (a <= n) {
        console.log(a);
        a = a * 2 + 1;
    }
}
sequence2K1(["31"])
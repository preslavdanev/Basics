function depositCalculator(input){
    let deposit = Number(input[0]);
    let time = Number(input[1]);
    let percent = Number(input[2]);
    let sum = deposit + time * ((deposit * percent / 100) /12);
    console.log(sum)
}

depositCalculator(["200","3","5.7"])
function sumNumbers(input){

    let total = Number(input[0]);
    let sum = 0
    let index = 1;
    let command = Number(input[index]);
    index++

    while(sum < total){
        sum += command;
        command = Number(input[index]);
        index++
    }
    console.log(sum);
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
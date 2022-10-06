function numberPyramid(input){

    let n = Number(input[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for(let x = 1; x <= n; x++){
        for(let y = 1; y <= x; y++){
            
            if (current > n){
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;        
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigger){
            break;
        }
    }
}
numberPyramid(["15"])
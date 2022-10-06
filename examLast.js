function exam(input){

    let x1 = Number(input[0]);
    let x2 = Number(input[1]);
    let x3 = Number(input[2]);
    let buff = 0;
    
    for(let index1 = 1;index1 <= x1; index1++){
        if(index1 % 2 === 0){
        buff = "" + index1;
        }
        for(let index2 = 1; index2 <= x2; index2++){
            if(index2 = 2){
                buff = "" + index2;
            }else if(index2 = 3){
                buff = "" + index2;
            }else if(index2 = 5){
                buff = "" + index2;
            }else if(index2 = 7){
                buff = "" + index2;
            }
                for(let index3 = 1; index3 <= x3; index3++){
                    if(index3 % 2 === 0){
                        buff = "" + index3;
                    }
                }
            }
        }
    }
    console.log(buff);

exam(["3","5","5"])
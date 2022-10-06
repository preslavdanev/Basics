function test(input){

    let startMeeters = 5364;
    let target = 8848;
    let days = 1;
    index = 0;
    command = input[index];
    index++
    let onTop = false;

    while(command !== "END"){
        let night = command;
        if(night === "Yes"){
            days++;
        }
        if(days > 5){
            break;
        }
        command = Number(input[index]);
        index++
        startMeeters += command;
        if(startMeeters >= target){
            console.log(`Goal reached for ${days} days!`);
            onTop = true;
            break;
        }
        command = input[index];
        index++
    }
    if (onTop === false){
    console.log(`Failed!`);
    console.log(`${startMeeters}`);
    }
}
test(["Yes",
"700",
"END"])


function walking(input) {

    let goal = 10000;
    let index = 0;
    command = input[index];
    let steps = 0;

    while (steps <= goal) {

        if (command === "Going home") {
            index++;
            command = input[index];
            let stepsCounter = Number(command);
            steps += stepsCounter;
            if (steps >= goal) {
                console.log(`Goal reached! Good job!`);
                console.log(`${Math.abs(goal - steps)} steps over the goal!`);
                break
            } else {
                console.log(`${goal - steps} more steps to reach goal.`);
                break;
            }
        }
        stepsCounter = Number(command);
        steps += stepsCounter;
        if (steps >= goal) {
            console.log(`Goal reached! Good job!`);
            console.log(`${steps - goal} steps over the goal!`);
            break;
        }
        index++;
        command = input[index];
    }
}
walking(["125",
    "250",
    "4000",
    "30",
    "2678",
    "4682"])


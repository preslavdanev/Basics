function lunchBreak(input) {

    let name = input[0];
    let timeForEpisod = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeForLunch = breakTime / 8;
    let timeForChill = breakTime / 4;
    let timeLeft = breakTime - timeForLunch - timeForChill;

    if (timeLeft >= timeForEpisod) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeLeft - timeForEpisod)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(timeForEpisod - timeLeft)} more minutes.`);
    }

}
lunchBreak(["Teen Wolf", "48", "60"]);
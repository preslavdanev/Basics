function projectCreation(input) {
    let timePerProject = Number([3]);
    let architect = (input[0]);
    let projects = (input[1]);
    let timeForAll = timePerProject*projects;
    console.log(`The architect ${architect} will need ${timeForAll} hours to complete ${projects} project/s.`);

}

projectCreation(["George", 4])
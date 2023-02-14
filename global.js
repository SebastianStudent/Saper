    //Stop the game or not
    let winOrLose = true;

    //Variable of background and fields and bombs
    let height;
    let width;
    let backgroundColor = [];


    //Variable of global arrays
    //Positions
    let y;
    let x;
    //Arrays of objects   
    var arrayOfFields;
    var arrayOfBombs;
    var arrayOfNumbers = [];
    var arrayOfFlags = [];
    //Temp position Top (Y) and Left (X) to create numbers
    let tempY = 0;
    let tempX = 0;
    //Temp number of bombs to check how many is to create
    let numberOfBombs = 0;
    //Draw field or not on the map
    let showfield = true;
    //Index of flags to point
    let redFlag_Index = 0;
    //Start timer or not
    let startStopWatch = false;
    //Calculate the player current time
    let time = 0;
    let refresh = 0;
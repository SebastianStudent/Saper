document.addEventListener('DOMContentLoaded',() =>
{
    const body = document.querySelector('body');
    const canvas = document.querySelector('#saper');
    let saperGame = canvas.getContext('2d');

    const redFlag = document.createElement('div');
    redFlag.classList.add('menu');
    redFlag.innerText = "10";
    body.append(redFlag);
    const redFlagImage = document.getElementById('redFlag');
    redFlagImage.classList.add('icon');
    redFlagImage.style.display = 'inline-block';
    redFlag.append(redFlagImage);

    const stopwatcher = document.createElement('div');
    stopwatcher.classList.add('menu');
    stopwatcher.innerText = "000";
    body.append(stopwatcher);
    const stopwatcherImage = document.getElementById('stopwatch');
    stopwatcherImage.classList.add('icon');
    stopwatcherImage.style.display = 'inline-block';
    stopwatcher.append(stopwatcherImage);

    const bomb = document.getElementById("bomb");
    const one = document.getElementById('one');
    const two = document.getElementById('two');
    const three = document.getElementById('three');
    const four = document.getElementById('four');
    const five = document.getElementById('five');
    const six = document.getElementById('six');
    const seven = document.getElementById('seven');
    const eight = document.getElementById('eight');

    //Array of elements div
    let selectElement = [];

    //Posion Y and X div
    //Array of elements div
    let positionY = 0;
    let positionX = 20;

    for (let index = 0; index <= 3; index++) {
    selectElement[index] = document.createElement('div');
    selectElement[index].classList.add('level_of_difficulty');
    body.append(selectElement[index]);
    }

    selectElement[0].innerText = "Easy ";
    selectElement[1].innerText = "Easy";
    selectElement[2].innerText = "Medium";
    selectElement[3].innerText = "Hard";

    let arrowImage = document.createElement('img');
    arrowImage.setAttribute('src','images/arrowDown.png');
    selectElement[0].append(arrowImage);

    let show = false;
    selectElement[0].addEventListener('click', ()=>{
    if (!show) {
        selectElement[1].style.display = "block";
        selectElement[2].style.display = "block";
        selectElement[3].style.display = "block";
        show = true;
    }
    else
    {
        selectElement[1].style.display = "none";
        selectElement[2].style.display = "none";
        selectElement[3].style.display = "none";
        show = false;
    }
    })

    selectElement[1].addEventListener('click', ()=>{
    selectElement[1].style.display = "none";
    selectElement[2].style.display = "none";
    selectElement[3].style.display = "none";
    if(!(selectElement[0].innerText == (selectElement[1].innerText + " ")) || !winOrLose)
    {
        selectElement[0].innerText = selectElement[1].innerText + " ";
        selectElement[0].append(arrowImage);
        redFlag.innerText = "10";
        redFlag.append(redFlagImage);
        winOrLose = true;
        NewLevel();
    }
    show = false;
    })

    selectElement[2].addEventListener('click', ()=>{
    selectElement[1].style.display = "none";
    selectElement[2].style.display = "none";
    selectElement[3].style.display = "none";
    if(!(selectElement[0].innerText == (selectElement[2].innerText + " ")) || !winOrLose)
    {
        selectElement[0].innerText = selectElement[2].innerText + " ";
        selectElement[0].append(arrowImage);
        redFlag.innerText = "40";
        redFlag.append(redFlagImage);
        winOrLose = true;
        NewLevel();
    }
    show = false;
    })

    selectElement[3].addEventListener('click', ()=>{
    selectElement[1].style.display = "none";
    selectElement[2].style.display = "none";
    selectElement[3].style.display = "none";
    if(!(selectElement[0].innerText == (selectElement[3].innerText + " ")) || !winOrLose)
    {
        selectElement[0].innerText = selectElement[3].innerText + " ";
        selectElement[0].append(arrowImage);
        redFlag.innerText = "99";
        redFlag.append(redFlagImage);
        winOrLose = true;
        NewLevel();
    }
    show = false;
    })

    function Resize_and_background()
    {
        backgroundColor = [65,13,186];
        if (selectElement[0].innerText == "Easy ") 
        {
            if (window.innerWidth <= 300 || window.innerHeight <= 300) 
            {
                canvas.width = 200;
                canvas.height = 200;
                height = 20;
                width = 20;
            }
            else if( (window.innerWidth > 300 && window.innerWidth <= 400) || (window.innerHeight > 300 && window.innerHeight <= 400) )
            {
                canvas.width = 300;
                canvas.height = 280;
                height = 30;
                width = 30;
            }
            else if(window.innerWidth > 400 || window.innerHeight > 400)
            {
                canvas.width = 400;
                canvas.height = 360;
                height = 40;
                width = 40;
            }
        }
        else if(selectElement[0].innerText == "Medium ")
        {
            if (window.innerWidth <= 480 || window.innerHeight <= 480) 
            {
                canvas.width = 320;
                canvas.height = 320;
                height = 20;
                width = 20;
            }
            else if((window.innerWidth > 480 && window.innerWidth <= 640) || (window.innerHeight > 480 && window.innerHeight <= 640))
            {
                canvas.width = 480;
                canvas.height = 460;
                height = 30;
                width = 30;
            }
            else if(window.innerWidth > 640 || window.innerHeight > 640)
            {
                canvas.width = 640;
                canvas.height = 600;
                height = 40;
                width = 40;
            }
        }
        else
        {
            if (window.innerWidth <= 720 || window.innerHeight <= 720) 
            {
                canvas.width = 480;
                canvas.height = 440;
                height = 20;
                width = 20;
            }
            else if((window.innerWidth > 720 && window.innerWidth <= 960) || (window.innerHeight > 720 && window.innerHeight <= 960))
            {
                canvas.width = 720;
                canvas.height = 640;
                height = 30;
                width = 30;
            }
            else if(window.innerWidth > 960 || window.innerHeight > 960)
            {
                canvas.width = 960;
                canvas.height = 840;
                height = 40;
                width = 40;
            }
        }
        saperGame.fillStyle = 'rgb(' + backgroundColor[0] + ',' + backgroundColor[1] + ',' + backgroundColor[2] + ')';
        saperGame.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);
    }

    function Resize_and_menu() {
        for (let index = 0; index <= 3; index++) {
            selectElement[index].style.top = canvas.offsetTop + positionY + "px";
            if (index>0) 
            {
                selectElement[index].style.left = canvas.offsetLeft + positionX + "px";
            }
            else
            {
                selectElement[index].style.left = canvas.offsetLeft + "px";
                selectElement[index].style.display = "block";
            }
            positionY += 20;
        }
        positionY = 0;

        redFlag.style.top = canvas.offsetTop + "px";
        redFlag.style.left = selectElement[0].offsetLeft + selectElement[0].clientWidth + "px";
        stopwatcher.style.top = canvas.offsetTop + "px";
        stopwatcher.style.left = redFlag.offsetLeft + redFlag.clientWidth + "px";        
    }
    
    function NewLevel()
    {
        showfield = true;
        stopwatcher.innerText = "000";
        stopwatcher.append(stopwatcherImage);
        arrayOfFlags = [];
        arrayOfNumbers = [];
        redFlag_Index = 0;
        startStopWatch = false;
        if (selectElement[0].innerText == "Easy ") 
        {
            if (window.innerWidth <= 300 || window.innerHeight <= 300) 
            {
                canvas.width = 200;
                canvas.height = 200;
                height = 20;
                width = 20;
            }
            else if( (window.innerWidth > 300 && window.innerWidth <= 400) || (window.innerHeight > 300 && window.innerHeight <= 400) )
            {
                canvas.width = 300;
                canvas.height = 280;
                height = 30;
                width = 30;
            }
            else if(window.innerWidth > 400 || window.innerHeight > 400)
            {
                canvas.width = 400;
                canvas.height = 360;
                height = 40;
                width = 40;
            }

            arrayOfBombs = new Array(10);
            while (arrayOfBombs[9] == null) 
            {
                y = Math.floor(Math.random() * 8) * height + 40;
                x = Math.floor(Math.random() * 10) * width;
                for(let i = 0;i < arrayOfBombs.length;i++)
                {
                    if(arrayOfBombs[i] == null)
                    {
                        arrayOfBombs[i] = new Bomb(height,width,y,x);
                        break;
                    } 
                    else if(arrayOfBombs[i].top == y && arrayOfBombs[i].left == x)
                    {
                        break;
                    }
                }
            }

            
            
            arrayOfFields = new Array(8);
            for (let index = 0; index < arrayOfFields.length; index++) 
            {
                arrayOfFields[index] = new Array(10);
                y = (index * height) + 40;
                for (let j = 0; j < 10; j++) 
                {
                    x = j * width;
                    if ( (j+index)%2 == 0)
                    {
                        backgroundColor = [135, 222, 53];
                        arrayOfFields[index][j] = new Field(height,width,y,x,backgroundColor,showfield);
                    }
                    else
                    {
                        backgroundColor = [122, 247, 5];
                        arrayOfFields[index][j] = new Field(height,width,y,x,backgroundColor,showfield);
                    }
                }
            }
            
        }
        else if(selectElement[0].innerText == "Medium ")
        {
            if (window.innerWidth <= 480 || window.innerHeight <= 480) 
            {
                canvas.width = 320;
                canvas.height = 320;
                height = 20;
                width = 20;
            }
            else if((window.innerWidth > 480 && window.innerWidth <= 640) || (window.innerHeight > 480 && window.innerHeight <= 640))
            {
                canvas.width = 480;
                canvas.height = 460;
                height = 30;
                width = 30;
            }
            else if(window.innerWidth > 640 || window.innerHeight > 640)
            {
                canvas.width = 640;
                canvas.height = 600;
                height = 40;
                width = 40;
            }
            
            arrayOfBombs = new Array(40);
            while (arrayOfBombs[39] == null) 
            {
                y = Math.floor(Math.random() * 14) * height + 40;
                x = Math.floor(Math.random() * 16) * width;
                for(let i = 0;i < arrayOfBombs.length;i++)
                {
                    if(arrayOfBombs[i] == null)
                    {
                        arrayOfBombs[i] = new Bomb(height,width,y,x);
                        break;
                    } 
                    else if(arrayOfBombs[i].top == y && arrayOfBombs[i].left == x)
                    {
                        break;
                    }
                }
            }

            arrayOfFields = new Array(14);
            for (let index = 0; index < arrayOfFields.length; index++) 
            {
                arrayOfFields[index] = new Array(16);
                y = index * height + 40;
                for (let j = 0; j < 18; j++) 
                {
                    x = j * width;
                    if ( (j+index)%2 == 0)
                    {
                        backgroundColor = [135, 222, 53];
                        arrayOfFields[index][j] = new Field(height,width,y,x,backgroundColor,showfield);
                    }
                    else
                    {
                        backgroundColor = [122, 247, 5];
                        arrayOfFields[index][j] = new Field(height,width,y,x,backgroundColor,showfield);
                    }
                }
            }
        }
        else
        {
            if (window.innerWidth <= 720 || window.innerHeight <= 720) 
            {
                canvas.width = 480;
                canvas.height = 440;
                height = 20;
                width = 20;
            }
            else if((window.innerWidth > 720 && window.innerWidth <= 960) || (window.innerHeight > 720 && window.innerHeight <= 960))
            {
                canvas.width = 720;
                canvas.height = 640;
                height = 30;
                width = 30;
            }
            else if(window.innerWidth > 960 || window.innerHeight > 960)
            {
                canvas.width = 960;
                canvas.height = 840;
                height = 40;
                width = 40;
            }

            arrayOfBombs = new Array(99);
            while (arrayOfBombs[98] == null) 
            {
                y = Math.floor(Math.random() * 20) * height + 40;
                x = Math.floor(Math.random() * 24) * width;
                for(let i = 0;i < arrayOfBombs.length;i++)
                {
                    if(arrayOfBombs[i] == null)
                    {
                        arrayOfBombs[i] = new Bomb(height,width,y,x);
                        break;
                    } 
                    else if(arrayOfBombs[i].top == y && arrayOfBombs[i].left == x)
                    {
                        break;
                    }
                }
            }
            
            arrayOfFields = new Array(20);
            for (let index = 0; index < arrayOfFields.length; index++) 
            {
                arrayOfFields[index] = new Array(24);
                y = index * height + 40;
                for (let j = 0; j < 24; j++) 
                {
                    x = j * width;
                    if ( (j+index)%2 == 0) 
                    {
                        backgroundColor = [135, 222, 53];
                        arrayOfFields[index][j] = new Field(height,width,y,x,backgroundColor,showfield);
                    }
                    else
                    {
                        backgroundColor = [122, 247, 5];
                        arrayOfFields[index][j] = new Field(height,width,y,x,backgroundColor,showfield);
                    }
                }
            }
        }
        

        let indexNumber = 0;
        y = 40;
        x = 0;
        
        while (true) 
        {
            if (y >= canvas.height) 
            {
                break;
            }
            while (true) 
            {
                if (x >= canvas.width) 
                {
                    break;
                }
                else 
                {
                    for (let i = 0; i < arrayOfBombs.length; i++) 
                    {
                        if (arrayOfBombs[i].left == x && arrayOfBombs[i].top == y) 
                        {
                            x += width;
                            i = -1;
                            if(x >= canvas.width)
                            {
                                break;
                            }
                        }
                    }
                    if (x >= canvas.width) 
                    {
                        break;
                    }
                    tempY = y - height;
                    tempX = x - width;
                    for (let i = 0; i < 9; i++) 
                    {
                        if (tempY == y && tempX == x) 
                        {
                            tempX += width;
                            i++;
                        }
                        for (let j = 0; j < arrayOfBombs.length; j++) 
                        {
                            if(arrayOfBombs[j].top == tempY && arrayOfBombs[j].left == tempX)
                            {
                                numberOfBombs++;
                                break;
                            }
                        }
                        tempX += width;
                        if (i == 2 || i == 5) 
                        {
                            tempY += height;
                            tempX = x - width;
                        }
                    }                    
                    switch (numberOfBombs) 
                    {
                        case 1:
                            arrayOfNumbers[indexNumber] = new Number(height,width,y,x,one,true);
                            indexNumber++;
                            break;
                        case 2:
                            arrayOfNumbers[indexNumber] = new Number(height,width,y,x,two,true);
                            indexNumber++;                            
                            break;
                        case 3:
                            arrayOfNumbers[indexNumber] = new Number(height,width,y,x,three,true);
                            indexNumber++;
                            break;
                        case 4:
                            arrayOfNumbers[indexNumber] = new Number(height,width,y,x,four,true);
                            indexNumber++;
                            break;
                        case 5:
                            arrayOfNumbers[indexNumber] = new Number(height,width,y,x,five,true);
                            indexNumber++;
                            break;
                        case 6:
                            arrayOfNumbers[indexNumber] = new Number(height,width,y,x,six,true);
                            indexNumber++;
                            break;
                        case 7:
                            arrayOfNumbers[indexNumber] = new Number(height,width,y,x,seven,true);
                            indexNumber++;
                            break;
                        case 8:
                            arrayOfNumbers[indexNumber] = new Number(height,width,y,x,eight,true);
                            indexNumber++;
                            break;
                        default:
                            break;
                    }
                }
                numberOfBombs = 0;
                x += width;
            }
            x = 0;
            y += height;
        }
    }

    function Resize_and_fields()
    {
        //Bombs
        for (let j = 0; j < arrayOfBombs.length; j++) 
        {
            x = arrayOfBombs[j].left/arrayOfBombs[j].width;
            y = (arrayOfBombs[j].top - 40)/arrayOfBombs[j].height;
            x = x * width;
            y = y * height + 40;
            arrayOfBombs[j] = new Bomb(height,width,y,x);
        }
        for (let i = 0; i < arrayOfBombs.length; i++) 
        {
            saperGame.drawImage(bomb,arrayOfBombs[i].left,arrayOfBombs[i].top,arrayOfBombs[i].width,arrayOfBombs[i].height);    
        }

        //Numbers
        for (let j = 0; j < arrayOfNumbers.length; j++) 
        {
            x = arrayOfNumbers[j].left/arrayOfNumbers[j].width;
            y = (arrayOfNumbers[j].top - 40)/arrayOfNumbers[j].height;
            x = x * width;
            y = y * height + 40;
            arrayOfNumbers[j] = new Number(height,width,y,x,arrayOfNumbers[j].image,arrayOfNumbers[j].showNumber);
        }
        for (let i = 0; i < arrayOfNumbers.length; i++) 
        {
            saperGame.drawImage(arrayOfNumbers[i].image,arrayOfNumbers[i].left,arrayOfNumbers[i].top,arrayOfNumbers[i].width,arrayOfNumbers[i].height);
        }
        
        //Fields
        for (let i = 0; i < arrayOfFields.length; i++) 
        {
            for (let j = 0; j < arrayOfFields[i].length; j++) 
            {   
                x = arrayOfFields[i][j].left/arrayOfFields[i][j].width;
                y = (arrayOfFields[i][j].top - 40)/arrayOfFields[i][j].height;
                x = x * width;
                y = y * height + 40;
                if ( (j+i)%2 == 0) 
                {
                    backgroundColor = [135, 222, 53];
                }
                else
                {
                    backgroundColor = [122, 247, 5];
                }
                arrayOfFields[i][j] = new Field(height,width,y,x,backgroundColor,arrayOfFields[i][j].showfield);
            }
        }
        saperGame.globalAlpha = 0.5;
        for (let i = 0; i < arrayOfFields.length; i++) 
        {
            for (let j = 0; j < arrayOfFields[i].length; j++) 
            {
                if (arrayOfFields[i][j].showfield) 
                {
                    saperGame.fillStyle = `rgb(${arrayOfFields[i][j].backgroundColor[0]},${arrayOfFields[i][j].backgroundColor[1]},${arrayOfFields[i][j].backgroundColor[2]})`;
                    saperGame.fillRect(arrayOfFields[i][j].left,arrayOfFields[i][j].top,arrayOfFields[i][j].width,arrayOfFields[i][j].height);
                }
            }
        }
        saperGame.globalAlpha = 1;
        //Flags
        for (let j = 0; j < arrayOfFlags.length; j++) 
        {
            x = arrayOfFlags[j].left/arrayOfFlags[j].width;
            y = (arrayOfFlags[j].top - 40)/arrayOfFlags[j].height;
            x = x * width;
            y = y * height + 40;
            arrayOfFlags[j] = new Flag(height,width,y,x);
        }
        for (let i = 0; i < arrayOfFlags.length; i++) 
        {
            saperGame.drawImage(redFlagImage,arrayOfFlags[i].left,arrayOfFlags[i].top,arrayOfFlags[i].width,arrayOfFlags[i].height);    
        }
        redFlag.append(redFlagImage);
    }
    
    canvas.addEventListener('click',(e)=>
    {
        if (!winOrLose) 
        {
            return;
        }
        startStopWatch = true;
        const mouseX = e.offsetX;
        const mouseY = e.offsetY;
        let checkField = false;
        for (let i = 0; i < arrayOfFields.length; i++) 
        {
            if (checkField) 
            {
                break;
            }            
            for (let j = 0; j < arrayOfFields[i].length; j++) 
            {
                if ( (arrayOfFields[i][j].left <= mouseX && arrayOfFields[i][j].left + arrayOfFields[i][j].width > mouseX) && (arrayOfFields[i][j].top <= mouseY && arrayOfFields[i][j].top + arrayOfFields[i][j].height > mouseY) ) 
                {
                    arrayOfFields[i][j].showfield = false;
                    checkField = true;
                    
                    for (let k = 0; k < arrayOfBombs.length; k++) 
                    {
                        if (arrayOfFields[i][j].left == arrayOfBombs[k].left && arrayOfFields[i][j].top == arrayOfBombs[k].top) 
                        {
                            Lose();
                            break;
                        }
                    }
                    for (let k = 0; k < arrayOfNumbers.length; k++) 
                    {
                        if (arrayOfFields[i][j].left == arrayOfNumbers[k].left && arrayOfFields[i][j].top == arrayOfNumbers[k].top) 
                        {
                            arrayOfNumbers[k].showNumber = false;
                            break;
                        }
                    }
                }
            }
        }
        for (let i = 0; i < arrayOfNumbers.length; i++) 
        {
            if (arrayOfNumbers[i].showNumber) 
            {
                return;
            }
        }
        Win();
    })

    canvas.oncontextmenu = (e) =>
    {
        e.preventDefault();
        if (!winOrLose) 
        {
            return;
        }
        const mouseX = e.offsetX;
        const mouseY = e.offsetY;
        for (let i = 0; i < arrayOfFlags.length; i++) 
        {
            if ((arrayOfFlags[i].left <= mouseX && arrayOfFlags[i].left + arrayOfFlags[i].width > mouseX) && (arrayOfFlags[i].top <= mouseY && arrayOfFlags[i].top + arrayOfFlags[i].height > mouseY)) 
            {
                arrayOfFlags.splice(i,1);
                let redFlag_Number = parseInt(redFlag.innerText);
                redFlag_Number++;
                redFlag.innerText = redFlag_Number;
                redFlag_Index--;
                return;
            }
        }
        if (parseInt(redFlag.innerText) == 0) 
        {
            return;
        }
        for (let i = 0; i < arrayOfFields.length; i++) 
        {
            for (let j = 0; j < arrayOfFields[i].length; j++) 
            {
                if ( (arrayOfFields[i][j].left <= mouseX && arrayOfFields[i][j].left + arrayOfFields[i][j].width > mouseX) && (arrayOfFields[i][j].top <= mouseY && arrayOfFields[i][j].top + arrayOfFields[i][j].height > mouseY) ) 
                {
                    arrayOfFlags[redFlag_Index] = new Flag (height,width,arrayOfFields[i][j].top,arrayOfFields[i][j].left);
                    let redFlag_Number = parseInt(redFlag.innerText);
                    redFlag_Number--;
                    redFlag.innerText = redFlag_Number;
                    redFlag_Index++;
                    return;
                }
            }
        }
    }

    function Lose()
    {
        for (let i = 0; i < arrayOfFields.length; i++) 
        {
            for (let j = 0; j < arrayOfFields[i].length; j++) 
            {
                for (let k = 0; k < arrayOfBombs.length; k++) 
                {
                    if (arrayOfFields[i][j].left == arrayOfBombs[k].left && arrayOfFields[i][j].top == arrayOfBombs[k].top) 
                    {
                        arrayOfFields[i][j].showfield = false;
                        break;
                    }
                }
            }
        }
        for (let i = 0; i < arrayOfFlags.length; i++)
        {
            for (let j = 0; j < arrayOfBombs.length; j++)
            {
                if (arrayOfBombs[j].left == arrayOfFlags[i].left && arrayOfBombs[j].top == arrayOfFlags[i].top) 
                {
                    arrayOfFlags.splice(i,1);
                    i--;
                    break;
                }
            }
        }
        for (let i = 0; i < arrayOfFlags.length; i++) 
        {
            for (let j = 0; j < arrayOfNumbers.length; j++) 
            {
                if (arrayOfNumbers[j].left == arrayOfFlags[i].left && arrayOfNumbers[j].top == arrayOfFlags[i].top) 
                {
                    arrayOfFlags.splice(i,1);
                    i--;
                    break;
                }
            }
        }
        time = 0;
        refresh = 0;
        winOrLose = false;
        startStopWatch = false;
        Resize_and_background();
        Resize_and_fields();
        alert("You lose");
    }

    function StopWatch(startStopWatch)
    {
        if (!startStopWatch) 
        {
            return;
        }
        refresh += 50;
        if(refresh == 1000)
        {
            refresh = 0;
            time++;
            if (time < 10) 
            {
                stopwatcher.innerText = `00${time}`;
            }
            else if(time < 100)
            {
                stopwatcher.innerText = `0${time}`;
            }
            else if(time < 999)
            {
                stopwatcher.innerText = `${time}`;
            }
            else
            {
                stopwatcher.innerText = `999`;
            }
        }
        stopwatcher.append(stopwatcherImage);
    }

    function Win()
    {
        time = 0;
        refresh = 0;
        winOrLose = false;
        startStopWatch = false;
        Resize_and_background();
        Resize_and_fields();
        alert("Congrats\nYou won!");
    }

    NewLevel();
    setInterval(Game, 50);
    function Game()
    {
        if (!winOrLose) 
        {
            Resize_and_menu();
        }
        else
        {
            Resize_and_background();
            Resize_and_menu();
            Resize_and_fields();
            StopWatch(startStopWatch);
        }
    }
})
const robot = require('robotjs');
const fs = require("fs");

setTimeout(openOpenboard, 2000);

function openOpenboard(){
    robot.moveMouseSmooth(95, 784);
    robot.mouseClick();
    robot.typeString("Openboard");
    robot.keyTap("enter");
    setTimeout(typeHi, 2000);
}

function typeHi(){
    robot.moveMouseSmooth(500, 300);
    robot.mouseToggle("down", "left");
    robot.moveMouseSmooth(500, 550);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(500, 425);
    robot.mouseToggle("down", "left");
    robot.moveMouseSmooth(700, 425);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(700, 300);
    robot.mouseToggle("down", "left");
    robot.moveMouseSmooth(700, 550);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(800, 300);
    robot.mouseToggle("down", "left");
    robot.dragMouse(1000, 300);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(900, 300);
    robot.mouseToggle("down", "left");
    robot.moveMouseSmooth(900, 550);
    robot.mouseToggle("up", "left");

    robot.moveMouseSmooth(800, 550);
    robot.mouseToggle("down", "left");
    robot.moveMouseSmooth(1000, 550);
    robot.mouseToggle("up", "left");

    setTimeout(()=>{robot.moveMouseSmooth(1168, 29)
        robot.mouseClick()}, 2000);

    setTimeout(openfile, 2000);
}

function openfile(){
    robot.moveMouseSmooth(572, 778);
    robot.mouseClick();
    setTimeout(()=>{robot.moveMouseSmooth(333, 436)
        robot.mouseClick()}, 1000);
    
    setTimeout(openVsCode, 2000);
}

function openVsCode(){
    robot.moveMouseSmooth(777, 451);
    robot.mouseClick("left", "true");
    robot.moveMouseSmooth(576, 256);
    robot.mouseClick();
    robot.mouseClick("right", "false");
    setTimeout(openVS, 2100); 
}

function openVS(){
    robot.moveMouseSmooth(628, 334);
    robot.mouseClick();

    robot.moveMouseSmooth(1037, 33); 
    robot.mouseClick();

    setTimeout(openChrome, 2000); 
}

function openChrome(){
    robot.moveMouseSmooth(95, 784);
    robot.mouseClick();
    robot.typeString("Google chrome");
    robot.keyTap("enter");
    setTimeout(openTabs, 2000);
}

function openTabs(){
    let rdata = fs.readFileSync("./chrome.json");
    let data = JSON.parse(rdata);

    robot.moveMouseSmooth(527, 50);
    robot.mouseClick();

    for(let i=0; i<data.length; i++){
        for(let j=0; j<data[i].length; j++){
            robot.typeString(data[i][j]);
            robot.keyTap("enter");

            if(j < data[i].length - 1){
                robot.keyToggle("control", "down");
                robot.keyTap("t");
                robot.keyToggle("control", "up");
            }
            else if(i < data.length - 1){
                robot.keyToggle("control", "down");
                robot.keyTap("n");
                robot.keyToggle("control", "up");
            }
        }
    }

    robot.moveMouseSmooth(500, 500);
    setTimeout(openNotepad, 1500);
}

function openNotepad(){
    robot.moveMouseSmooth(95, 784);
    robot.mouseClick();
    robot.typeString("Notepad");
    robot.keyTap("enter");

    robot.moveMouseSmooth(400, 400);
    robot.mouseClick();
    robot.typeString("Your system is ready to use...")
}
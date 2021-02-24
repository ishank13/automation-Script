const robot = require('robotjs');

let id = setInterval(getPos, 1000);

function getPos(){
    let mouse = robot.getMousePos();
    console.log(mouse);

    if(mouse.x == 0 && mouse.y == 0){
        clearInterval(id);
    }
}
// way -1 using interface

interface Point {
    x: number,
    y: number,
    z: number
}

function drawPoint(point: Point) {
    // do something...
}

drawPoint({x:1, y:2, z:3});



// way 2 

function drawPointV2(point: {x: number, y: number, z: number}) {
    // do something...
}

drawPointV2({x:10, y:20, z:40});



// way 3

function drawPointV3(x, y, z) {
    // do something...
}

drawPointV3(10, 20, 1);

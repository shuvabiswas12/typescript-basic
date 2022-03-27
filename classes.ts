class Draw {
    
    private x: number;
    private y: number;

    // ***
    // we can not use multiple constructor here, so in order to use default constructor,
    // we have done this parameters are optional by puting question mark after each parameter.
    // and thus we can achive functionality of default constructor or multiple constructor.

    // these, a and b fields are auto generated in runtime and auto initialized by tsc compiler.
    // this is an amazing features

    constructor(x?: number, y?: number, private a?: number, private b?: number) {
        this.x = x;
        this.y = y;
    }

    // these two functions by default in public format, that is why we do not need to write public explicitly.
    drawPoint() {
        // do something...
        console.log("Result = " + (this.x + this.y));
    }

    calculateDistance(draw: Draw) {
        // do something...
    }
}

let draw: Draw = new Draw(1, 2);
draw.drawPoint();

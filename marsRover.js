
class MarsRower {
    constructor(grid, initialPosition) {
        this.x = Number(initialPosition[0]),
        this.y = Number(initialPosition[2]),
        this.direction = initialPosition[4],
        this.maxX = Number(grid[0]),
        this.maxY = Number(grid[2])
    }

    move() {
        if (this.direction === "N"){
            if (this.y < this.maxY){ this.y += 1; }
        }
        else if (this.direction === "S"){
            if (this.y > 0){ this.y -= 1; }
        }
        else if (this.direction === "E"){
            if (this.x < this.maxX){ this.x += 1; }
        }
        else if (this.direction === "W"){
            if (this.x > 0){ this.x -= 1; }
        }
    }
    
    turnRight() {
        if (this.direction === "N"){
            this.direction = "E";
        }
        else if (this.direction === "E"){
            this.direction = "S";
        }
        else if (this.direction === "S"){
            this.direction = "W";
        }
        else if (this.direction === "W"){
            this.direction = "N";
        }
    }
    
    turnLeft() {
        if (this.direction === "N"){
            this.direction = "W";
        }
        else if (this.direction === "E"){
            this.direction = "N";
        }
        else if (this.direction === "S"){
            this.direction = "E";
        }
        else if (this.direction === "W"){
            this.direction = "S";
        }
    }

    turn(direction) {
        if(direction === "L"){
            this.turnLeft();
        } else {
            this.turnRight();
        }
    }
}

const marsRower = (grid, initialPosition, instructions) => {
    initialize(grid, initialPosition);
    
    console.log(`${this.x}, ${this.y}, ${this.direction}`);
}

//returns final position and direction.
let trackRover = (rover, instructions) => {
    for (char of instructions) {
        if(char === "M"){
            rover.move();
        } else {
            rover.turn(char);
        }
    }
    return `The rover is at (${rover.x}, ${rover.y}) facing ${rover.direction}`
}

let givenGrid = "5 5";
let initialPosition = "3 3 E";
let instructions = "MMRMMRMRRM";

myRover = new MarsRower(givenGrid, initialPosition);
console.log(trackRover(myRover, instructions));
let bird    //initialize the bird
let isGameOver //we'll need this to keep track if the game is running or not

function setup() {
    createCanvas(600, 400)  //set the canvas size

    bird = new Bird()   //create a new Bird object from the Bird class

    isGameOver = false  //initally the game will not run until the screen is clicked
}

function draw() {
    background(0, 170, 200) //the background colour


    if(isGameOver){ //if the game is over freeze the screen and wait for a mouse click
        bird.display()    
    } else {    //if the game is not over, we'll run the game
        
    }

}
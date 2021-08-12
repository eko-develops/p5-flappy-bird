let bird    //Initialize the bird
let isGameOver //We'll need this to keep track if the game is running or not

function setup() {
    createCanvas(600, 400)  //Set the canvas size

    bird = new Bird()   //Create a new Bird object from the Bird class

    isGameOver = true  //Initally the game will not run until the screen is clicked
}

function draw() {
    background(0, 170, 200) //The background colour

    if(isGameOver){ //If the game is over, freeze the screen and wait for a mouse click
        bird.display()    //Display the bird
    } else {    //If the game is not over, we'll run the game
        bird.display()  //Display the bird

        /**If the mouseIsPressed returns true, make the bird fly.
         * If mouseIsPressed is false, the bird will fall.
         */
        bird.fly(mouseIsPressed)
        
        /**If the bird is colliding with the ceiling or ground,
         * stop the game by setting isGameOver to true.
         */
        if(bird.collide(height)){
            isGameOver = true
            console.log('game over is ', isGameOver)
        }

    }   //end isGameOver else
    
}

//Mouse click to start/restart the game
function mousePressed(){
    //If the game is over and the bird is colliding, next click will restart the game
    if(isGameOver){
        bird.posY = height / 2
        isGameOver = false
        console.log('game over is ', isGameOver)
        console.log('game started/restarted')
    }
}
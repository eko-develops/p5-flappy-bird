let bird    //Initialize the bird
let isGameOver //We'll need this to keep track if the game is running or not
let pipes = [] //Initialize an array of pipes
const numberOfPipes = 4//Initialize a constant to control starting amount of pipes

function setup() {
    createCanvas(600, 400)  //Set the canvas size

    bird = new Bird()   //Create a new Bird object from the Bird class
    
    isGameOver = true  //Initally the game will not run until the screen is clicked

    for(let i = 0; i < numberOfPipes; i++){
        pipes[i] = new Pipe()
    }

}

function draw() {
    // background(0, 170, 200) //The background colour
    background(60) //The background colour

    if(isGameOver){ //If the game is over, freeze the screen and wait for a mouse click
        bird.display()    //Display the bird
    } else {    //If the game is not over, we'll run the game
        bird.display()  //Display the bird

        /**Move the pipes when the game starts */
        for(let pipe of pipes){
            pipe.move()
        }

        /**If the mouseIsPressed returns true, make the bird fly.
         * If mouseIsPressed is false, the bird will fall.
         */
        bird.fly(mouseIsPressed)
        
        /**While the game is running, if the bird collides
         *  with the ceiling or ground, stop the game by
         * setting isGameOver to true.
         */
        if(bird.collide(height)){
            isGameOver = true
            console.log('game over is ', isGameOver)
        }
    }   //end isGameOver else
    

    /**Display the pipes*/
    pipes.forEach( (pipe, index) => {
        pipe.display()  //Show each pipe from pipes
        /**By default, pipes will be placed on the ceiling */
        if(index % 2 === 0){    //For every other pipe, we'll move it to the bottom
            /**Put the pipe on the bottom.
             * If we set the posY of the pipe to just height, it will take the upper left corner
             * and move that to the bottom of the screen, making it not appear. It's there
             * but it's below the point that you can see. So we'll subtract the height of the pipe
             * so that it moves the pipe up.
             * 
             * As height increases, the canvas will stretch down.
             */
            pipe.posY = height - pipe.height    //Change posY of this pipe: height of canvas - pipe height
        }
    })


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
let bird    //Initialize the bird
let isGameOver //We'll need this to keep track if the game is running or not
let pipes = [] //Initialize an array of pipes
let scoreLabel
let score = 0
let birdImage
let bgImage
let pipeImage

//Preload any images, audio files, etc..
function preload(){
    birdImage = loadImage('flappy-bird-assets/sprites/bluebird-midflap.png')
    bgImage = loadImage('flappy-bird-assets/sprites/background-day.png')
    pipeImage = loadImage('flappy-bird-assets/sprites/pipe-green.png')
}

function setup() {
    createCanvas(500, 600)  //Set the canvas size

    bird = new Bird()   //Create a new Bird object from the Bird class
    
    isGameOver = true  //Initally the game will not run until the screen is clicked

    pipes.push(new Pipe())  //Push a new Pipe object to the pipes array

}

function draw() {
    // background(60) //The background colour
    imageMode(CENTER)
    image(bgImage, width / 2, height / 2, width, height)

    /**We keep the display of the pipes always showing
     * so when the user dies, it acts like a death cam
     */
     for(let pipe of pipes){
         imageMode(CORNER)
        pipe.display(pipeImage)
    }

    if(isGameOver){ //If the game is over, freeze the screen and wait for a mouse click
        bird.display(birdImage)    //Display the bird
    } else {    //If the game is not over, we'll run the game
        bird.display(birdImage)  //Display the bird

        /**Move the pipes when the game starts.
         * We'll also need to check if the pipe is off the screen
         * and remove it. If we don't remove it, the pipes
         * array could get very big.
         */
        for(let i = pipes.length - 1; i >= 0; i--){
            pipes[i].move()
            /**Check if the pipe is off the screen */
            if(pipes[i].isOffScreen(pipes[i])){
                score++
                pipes.splice(i, 1)  //If it is, remove it from the pipes array
            }
        }

        /**frameCount is an enviroment variable available with p5.
         * We can use it to create a new pipe depending on how many
         * frames has passed.
         */
        if(frameCount % 80 == 0){
            /**Every 80 frames, create a new pipe */
            pipes.push(new Pipe())
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
        
        /**While the game is running, if a pipe collides
         * with the bird, stop the game by setting isGameOver
         * to true.
         */
        pipes.forEach( (pipe) => {
            if(pipe.collide(bird)){
                isGameOver = true
                console.log('game over is ', isGameOver)
            }
        })

    }   //end isGameOver else


    /**Draw different text depending on state of game */
    if(isGameOver){
        //If the game is over, show the score and instructions to play
        textSize(24)
        fill(255)
        text(`Your score is ${score}. Click to play.`, 150, 100)
    } else {
        //If game is not over, show the score
        textSize(24)
        fill(255)
        text(`Score: ${score}`, 150, 100)
    }
    

}

//Mouse click to start/restart the game
function mousePressed(){
    //If the game is over and the bird is colliding, next click will restart the game
    if(isGameOver){
        bird.posY = height / 2
        isGameOver = false
        pipes = []
        score = 0
        console.log('game over is ', isGameOver)
        console.log('game started/restarted')
    } 
}
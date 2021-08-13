let bird    //Initialize the bird
let isGameOver //We'll need this to keep track if the game is running or not
let pipes = [] //Initialize an array of pipes
let scoreLabel
let score = 0
let birdImage
let bgImage
let pipeImage
let birdFlyImage
let birdFallImage
let highscore = 0
let birdImages = []

//Preload any images, audio files, etc..
function preload(){
    birdImage = loadImage('flappy-bird-assets/sprites/bluebird-midflap.png')
    bgImage = loadImage('flappy-bird-assets/sprites/background-day.png')
    pipeImage = loadImage('flappy-bird-assets/sprites/pipe-green.png')
    birdFlyImage = loadImage('flappy-bird-assets/sprites/bluebird-downflap.png')
    birdFallImage = loadImage('flappy-bird-assets/sprites/bluebird-upflap.png')

    birdImages = [birdImage, birdFlyImage, birdFallImage]
}

function setup() {
    createCanvas(500, 600)  //Set the canvas size

    bird = new Bird(birdImages)   //Create a new Bird object from the Bird class
    
    isGameOver = true  //Initally the game will not run until the screen is clicked

    pipes.push(new Pipe())  //Push a new Pipe object to the pipes array

    textAlign(CENTER, CENTER)

}

function draw() {
    // background(60) //The background colour
    imageMode(CENTER)
    image(bgImage, width / 2, height / 2, width, height)

    displayPipes()
    showScore()
    bird.display(birdImage)

    if(isGameOver){
        gameOverScreen()
    } else {
        runGame()
    }
}

//Mouse click to start/restart the game
function mousePressed(){
    //If the game is over and the bird is colliding, next click will restart the game
    if(isGameOver){
        bird.posY = height / 2
        bird.posX = 40
        isGameOver = false
        pipes = []
        score = 0
        console.log('game over is ', isGameOver)
        console.log('game started/restarted')
    } 
}

function showScore(){
        textSize(16)
        fill(255)
        text(`Highscore: ${highscore}`, 70, 30)
        text(`Score: ${score}`, 55, 70)
}

function displayPipes(){
    /**We keep the display of the pipes always showing
     * so when the user dies, it acts like a death cam
     */
     for(let pipe of pipes){
        imageMode(CORNER)
       pipe.display(pipeImage)
   }
}

function movePipes(){
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
}

function runGame(){

        movePipes() //Move the pipes when game is running

        /**frameCount is an enviroment variable available with p5.
         * We can use it to create a new pipe depending on how many
         * frames has passed.
         */
        if(frameCount % 80 == 0){
            /**Every 80 frames, create a new pipe */
            pipes.push(new Pipe())
        }

        /**If the mouseIsPressed returns true while the game is 
         * running, make the bird fly.
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
}


function gameOverScreen(){
        textSize(32)
        fill(255)
        text(`Game Over!`, width / 2, 150)
        textSize(16)
        text(`Click to play again`, width / 2, 200)
    }
    
function startScreen(){
        textSize(24)
        fill(255)
        text(`CLICK TO START`, width / 2, 200)
}
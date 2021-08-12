let bird    //Initialize the bird
let isGameOver //We'll need this to keep track if the game is running or not
let pipes = [] //Initialize an array of pipes
// const numberOfPipes = 5 //Initialize a constant to control starting amount of pipes

function setup() {
    createCanvas(600, 800)  //Set the canvas size

    bird = new Bird()   //Create a new Bird object from the Bird class
    
    isGameOver = true  //Initally the game will not run until the screen is clicked


    pipes.push(new Pipe())


}

function draw() {
    // background(0, 170, 200) //The background colour
    background(60) //The background colour

    if(isGameOver){ //If the game is over, freeze the screen and wait for a mouse click
        bird.display()    //Display the bird
    } else {    //If the game is not over, we'll run the game
        bird.display()  //Display the bird

        // /**Move the pipes when the game starts */
        // pipes.forEach( (pipe, index) => {
        //     pipe.move()
        //     if(pipe.isOffScreen(pipe)){
        //         pipes.splice(index, 1)
        //     }
        // })
        for(let i = pipes.length - 1; i >= 0; i--){
            pipes[i].move()
            if(pipes[i].isOffScreen(pipes[i])){
                pipes.splice(i, 1)
            }
        }

     

        /**frameCount is a enviroment variable available with p5.
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
    }   //end isGameOver else

    /**We keep the display of the pipes always showing
     * so when the user dies, it acts like a death cam
     */
    for(let pipe of pipes){
        pipe.display()
    }
}

//Mouse click to start/restart the game
function mousePressed(){
    //If the game is over and the bird is colliding, next click will restart the game
    if(isGameOver){
        bird.posY = height / 2
        isGameOver = false
        pipes = []
        console.log('game over is ', isGameOver)
        console.log('game started/restarted')
    } 
}
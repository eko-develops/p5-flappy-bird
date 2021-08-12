let bird    //initialize the bird
let isGameOver //we'll need this to keep track if the game is running or not

function setup() {
    createCanvas(600, 400)  //set the canvas size

    bird = new Bird()   //create a new Bird object from the Bird class

    isGameOver = true  //initally the game will not run until the screen is clicked
}

function draw() {
    background(0, 170, 200) //the background colour


    if(isGameOver){ //if the game is over freeze the screen and wait for a mouse click
        bird.display()    
    } else {    //if the game is not over, we'll run the game
        // bird.move()
        bird.display()
        //if the mouse is pressed, make the bird fly
        bird.fly(mouseIsPressed)
        
        if(bird.collide(height)){   //if we are colliding stop the game
            isGameOver = true
            console.log('game over is ', isGameOver)
        }

    }
    
}

//inital mouse click to start the game
function mousePressed(){
    //if the game is over and the bird is colliding, next click will restart the game
    if(isGameOver){
        bird.posY = height / 2
        isGameOver = false
        console.log('game over is ', isGameOver)
        console.log('game started/restarted')
    }
}
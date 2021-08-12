class Bird{
    constructor(){
        this.posX = 30  //starting posX of the bird
        this.posY = height / 2  //start at the centre of the canvas vertically
        this.radius = 30    //the radius of the bird
        this.velocity = -5 //the speed the bird falls and flys
    }


    /**
     * The bird will need to..
     * -move up and down
     * -set isGameOver to true if collide with ceiling, ground, or pipe
     */


    /**This method is used to create the bird */
     display = () => {
        noStroke()  //no border
        fill(255, 255, 0)   //yellow bird
        circle(this.posX, this.posY, this.radius)   //create a circle
    }

    collide = (height) => {
        if(this.posY > height){ //if we hit the floor, end the game
            console.log('colliding floor')
            return true
        } else if(this.posY < 0){   //if we hit the ceiling, end the game
            console.log('colliding ceiling')
            return true
        } else {
            return false    //if not colliding, game is not over
        }
    }

    fly = (mouseIsPressed) => {
        if(mouseIsPressed){ //if the mouse is pressed move bird up
            this.posY += this.velocity
        } else {
            this.posY -= this.velocity * 1  //if not bird will fall by getting the inverse of velocity
        }
        
    }
}
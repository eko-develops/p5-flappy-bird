class Bird{
    constructor(birdImages){
        this.posX = 40  //Starting posX of the bird
        this.posY = height / 2  //Start at the centre of the canvas vertically
        this.radius = 30    //The radius of the bird
        this.velocity = -5 //The speed the bird falls and flys

        this.birdImages = birdImages
    }


    /**
     * The bird will need to..
     * -be displayed
     * -move up and down
     * -set isGameOver to true if collide with ceiling, ground, or pipe
     */


    /**This method is used to create the bird */
     display = () => {
        // noStroke()  //No border
        // fill(255, 255, 0)   //Yellow bird
        image(birdImages[0], this.posX, this.posY)


        // circle(this.posX, this.posY, this.radius)   //Creates a circle
    }

    /**This method will listen for any collisions with the bird */
    collide = (height) => {
        if(this.posY > height){ //If the bird collides with the ground
            console.log('colliding floor')
            return true
        } else if(this.posY < 0){   //If the bird collides with the ceiling
            console.log('colliding ceiling')
            this.posY = 0   //Don't let the go off-screen when hitting ceiling
            return false
        } else {
            return false    //If the bird is not colliding with the ceiling or ground
        }
    }

    /**This method controls the flight of the bird*/
    fly = (mouseIsPressed) => {
        if(mouseIsPressed){ //If mouseisPressed is true, the bird will fly by recursively adding velocity to posY
            this.posY += this.velocity
        } else {    //If mouseIsPressed is false, bird will fall by getting the inverse of velocity
            this.posY += this.velocity * -1
        }
        
    }
}
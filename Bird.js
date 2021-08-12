class Bird{
    constructor(){
        this.posX = 30  //starting posX of the bird
        this.posY = height / 2  //start at the centre of the canvas vertically
        this.radius = 30    //the radius of the bird
        this.velocity = 5 //the speed the bird falls and flys
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

    move = () => {
        this.posY += this.velocity
    }


    fly = () => {

    }
}
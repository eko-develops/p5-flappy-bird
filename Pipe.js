class Pipe{
    constructor(){
        this.width = 50 //Width will always remain the same

        /**Get a random number between 100 and (500/2) - 30:
         * 
         * Highest possible value: (500/2) = 250 - 30 = 220
         * 
         * Height of canvas: 500
         * The height of both pipes: 220 + 220 = 440
         * 
         * Smallest gap possible: 500 - 440 = 60
         * Biggest gap possible: 500 - (125 + 125) = 250
         */
        this.topHeight = random(125, (height / 2) - 20)  //Random heights
        this.bottomHeight = random(125, (height / 2) - 20) //Random bottom height


        /**Default posY location for pipe is at the top */
        this.posY = 0
        
        /**Set the posX of the pipe to start on the
         * right side of the screen.
         */
        this.posX = width

        /**The speed of the pipes when moving */
        this.velocity = 4
    }

    /**The pipe will need...
     * -to be displayed
     * -move to th left
     * -collision with the bird (the bird can handle this)
     * -spawn pipes on the top and bottom
     * -spawn at different heights and intervals
     */

    /**We'll create "2 pipes" for 1 pipe. There will be a 
     * top and bottom part of the pipe.
     */
    display = () => {
        noStroke()

        fill(0, 200, 0)

        /**The top pipe:
         * Starting posX is right side of the screen.
         * Starting posY is top of the screen.
         * Width is this width.
         * Height of this pipe is something between 0-200.
         * 
         * The bottom pipe:
         * To keep it right below top pipe, same posX.
         * 
         * We want this pipe at the bottom so.. if we set it as just height, the pipe will be below the screen.
         * If we subtract the height of the pipe to the height of the canvas, it "aligns" the bottom of the
         * pipe to the bottom of the canvas..
         * 
         * Width is this width.
         * Height of this pipe is something between 0-200.
         */
        
        rect(this.posX, this.posY, this.width, this.topHeight)   //posX, posY, width, height
        rect(this.posX, height - this.bottomHeight, this.width, this.bottomHeight)   //posX, posY, width, height
        
    }

    /**For making the pipes move to the left */
    move = () => {
        this.posX += this.velocity * -1
    }

    /**Method for checking if the pipe is offscreen */
    isOffScreen = (pipe) => {
        /**If the pipe is off the screen, return true */
        if(pipe.posX < 0){
            return true
        } else {
            return false
        }
    }

    /**Method for checking if the pipe is colliding with the bird */
    collide = (bird) => {
        /**Checks if the bird is flying within the height of the bottom
         * and top pipes.
         */
        if(bird.posY < this.topHeight || bird.posY > height - this.bottomHeight){
            /**If the bird is flying within the pipes, check if the bird is
             * within the pipe on the x-axis.
             */
            if(bird.posX > this.posX && bird.posX < this.posX + this.width){
                console.log('collision', `\nTop Height: ${this.topHeight}\nBottom Height: ${this.bottomHeight}`)
                return true
            }
        }
        return false
    }
}
class Pipe{
    constructor(){
        this.width = 50 //Width will always remain the same
        this.topHeight = random(height / 2)  //Random heights
        this.bottomHeight = random(height / 2) //Random bottom height


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

    display = () => {
        noStroke()
        fill(0, 200, 0)
        rect(this.posX, this.posY, this.width, this.topHeight)   //posX, posY, width, height
        rect(this.posX, height - this.bottomHeight, this.width, this.bottomHeight)   //posX, posY, width, height
    }

    move = () => {
        this.posX += this.velocity * -1
    }

    /**Method for checking if the pipe is offscreen */
    isOffScreen = (pipe) => {
        /**If the pipe is off the screen, return true */
        if(pipe.posX < 0){
            return true
        }
    }


}
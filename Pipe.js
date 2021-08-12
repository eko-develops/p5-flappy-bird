class Pipe{
    constructor(){
        this.width = 50 //Width will always remain the same
        this.height = random(100, 300)  //Random heights


        /**Default posY location for pipe is at the top */
        this.posY = 0
        
        /**Set the posX of the pipe to be 40 + 100 pixels minimum
         * from the bird's position.
         */
        this.posX = 40 + random(100, 380)

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
        rect(this.posX, this.posY, this.width, this.height)   //posX, posY, width, height
    }

    move = () => {
        this.posX += this.velocity * -1
    }


}
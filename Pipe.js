class Pipe{
    constructor(){
        this.width = 50
        this.height = random(100, 300)

        this.posYBottom = height - this.height  //Place the pipe at the bottom
        this.posYTop = 0    //Place the pipe at the top

        /**Set the posX of the pipe to be 40 + 100 pixels minimum
         * from the bird's position.
         */
        this.posX = 40 + random(100, 380)

        this.velocity = 4
    }

    /**The pipe will need...
     * -to be displayed
     * -move to th left
     * -collision with the bird (the bird can handle this)
     * -spawn pipes on the top and bottom
     * -spawn at different heights and intervals
     */

    display(){
        noStroke()
        fill(0, 200, 0)
        rect(this.posX, this.posYTop, this.width, this.height)   //posX, posY, width, height
    }

    move(){
        this.posX += this.velocity * -1
    }

}
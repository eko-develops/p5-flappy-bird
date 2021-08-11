class Bird{
    constructor(){
        this.posX = 30
        this.posY = height / 2
    }


    /**This method is used to create the bird */
     create = () => {
        noStroke()
        fill(255, 0, 0)
        circle(this.posX, this.posY, 30)
    }
}
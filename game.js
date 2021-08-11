let bird

function setup() {
    createCanvas(600, 400)

    bird = new Bird()
}

function draw() {
    background(100, 0, 200)

    bird.create()

}
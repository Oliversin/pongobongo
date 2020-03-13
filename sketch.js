let board
let p1
let p2
let ball;
let ballDir;

function setup() {
	createCanvas(windowWidth, windowHeight);
	board = new Board(windowWidth, windowHeight, '#1c1605')
	let pw = 30
	let ph = 100
	let py = floor(windowHeight / 2) - floor(ph / 2)
	p1 = new Paddle(0, py, pw, ph, 'red')
	p2 = new Paddle(windowWidth - pw, py, pw, ph, 'blue')
	ball = new Ball( floor(windowWidth / 2),  floor(windowHeight / 2), 40, 'green')
	ballDir = Math.floor(Math.random() * 4);
}

function draw() {
	board.draw()
	p1.draw()
	p2.draw()
	ball.draw();
	ball.move(ballDir);
}

function keyPressed () {
	if(keyCode === 87) {
		p1.moveUp()
	} else if(keyCode === 83) {
		p1.moveDown()
	} else if(keyCode === UP_ARROW) {
		p2.moveUp()
	}  else if(keyCode === DOWN_ARROW) {
		p2.moveDown()
	}
}
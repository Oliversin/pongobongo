class Ball{
	constructor(x,y,d,c){
		this.x = x;
		this.y = y;
		this.d = d;
		this.c = c;
		this.speed = 5
		this.speedX = 2 * this.direction()
		this.speedY = 2 * this.direction()
	}

	draw(){
		push()
		noStroke()
		fill(this.c)
		ellipse(this.x,this.y, this.d, this.d)
		pop()
	}

	move(dir){


		this.x += this.speedX
		this.y += this.speedY
		/*if (dir == 0) {
			this.x+=this.speed;
			this.y+=this.speed;
		}else if (dir == 1) {
			this.x+=this.speed;
			this.y-=this.speed;
		}else if (dir == 2) {
			this.x-=this.speed;
			this.y+=this.speed;
			
		}else if (dir == 3) {
			this.x-=this.speed;
			this.y-=this.speed;
		}*/
		
	}

	direction(){
		return floor(random(2))* 2 - 1;
	}
}
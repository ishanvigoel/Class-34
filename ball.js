  
class Ball
{
	constructor(x,y,r)
	{
		var options = {
		
			
			frictionAir: 0.005,
			density: 1
		}

		this.x = x;
		this.y = y;
		this.r = r;
		
		this.body = Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);
	}

	display()
	{
		var ballpos=this.body.position;
		push();
		ellipseMode(RADIUS);
		stroke("black");
		fill("purple");
		ellipse(ballpos.x, ballpos.y, this.r, this.r);
		pop();	
	}
}
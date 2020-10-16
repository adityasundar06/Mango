class stone
{
	constructor(inputX,inputY,inputRadius)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2	
        }
        this.image = loadImage("stone.png");
		this.x=inputX;
		this.y=inputY;
		this.r=inputRadius;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
	}
	display()
	{	
		var posStone=this.body.position;		

		push()
		translate(posStone.x, posStone.y);
		rectMode(CENTER)
		strokeWeight(3);
		fill("black")
        ellipse(0,0,this.r, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        this.scale = 50;
		pop()	
	}
}
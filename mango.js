class mango
{
	constructor(inputX,inputY,inputRadius)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
        }
        this.image = loadImage("mango.png");
		this.x=inputX;
		this.y=inputY;
		this.r=inputRadius;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
	}
	display()
	{	
		var posMango=this.body.position;		

		push()
		translate(posMango.x, posMango.y);
		rectMode(CENTER)
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        this.scale = 50;
		pop()	
	}
}
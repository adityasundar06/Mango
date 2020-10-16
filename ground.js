class ground
{
	constructor(inputX,inputY,inputWidth,inputHeight)
	{
		var options={
			isStatic:true			
		}
		this.x=inputX;
		this.y=inputY;
		this.w=inputWidth;
		this.h=inputHeight;
		this.body=Bodies.rectangle(this.x, this.y, this.w, this.h, options);
 		World.add(world, this.body);
	}
	display()
	{
        var posGround=this.body.position;
            
		push()
		translate(posGround.x, posGround.y);
		rectMode(CENTER)
		strokeWeight(4);
		fill("green")
		rect(0,0,this.w,this.h);
		pop()	
	}
}
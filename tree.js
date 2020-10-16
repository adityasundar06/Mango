class tree{
    constructor(inputX,inputY){
        this.x=inputX;
        this.y=inputY;
        this.image = loadImage("tree.png");
        
        this.body = Bodies.rectangle(this.x,this.y,50,50);
    }
    display(){
		var posTree = this.body.position;		

        push()
		translate(posTree.x, posTree.y);
		rectMode(CENTER)
        strokeWeight(4);
        scale(9);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
		pop()	
    }
}
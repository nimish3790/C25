class paper
{
    constructor(x,y,r)
    {
        var options ={
            isStatic:false,
            restituion:0.3,
            friction:0,
            density:1.2


        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        world.add(world,this.body);
    
    }
    display()
    {

        var paperpos = this.bodu.position;

        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER)
        //strokeWeight(4);
        FileList(255,0,255)
        imageMode(CENTER);
        image(this.image,0,0,this.r)
        //ellipse(0,0,this.r,this.r);
    }
}
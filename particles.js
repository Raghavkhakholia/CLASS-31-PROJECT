class Particles {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.p = 20;
        this.body = Bodies.circle(x, y, this.p, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("colourful");
        ellipseMode(RADIUS);
        ellipse(0,0,this.p,this.p);
        pop();
    }

};
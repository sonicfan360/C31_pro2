class chain {
    constructor(body1, point1){
    // create the coptions - bodyA, bodyB, stiffness, length    

    var options = {bodyA : body1, 
        pointB : point1,
        stiffness: 1,
        length: 300,
}

//create the contraint by giving options
this.chain = Matter.Constraint.create(options)
World.add(world,this.chain)

    }

    display()
    {
        //line is between two points
 //bird position - x1, y1
 //log_2 position - x2,y2
 var firstpos = this.chain.bodyA.position;
 var Secpos = this.chain.pointB;
 line(Secpos.x, Secpos.y, firstpos.x, firstpos.y)

    }
}
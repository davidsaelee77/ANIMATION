class Necromancer extends Entity{
    
    constructor (game, spritesheet) {
	super(game, 200, 400, 56, 56)
	this.animation = new Animation(spritesheet, 297, 187, 6, .10, 36, false, .5);
	    this.ctx = game.ctx;
	    this.location = {
		    '0': [200, 400],
		    '1': [300, 250],
		    '2': [820, 400],
		    '3': [50, 240],
	    	    '4': [540, 410]
		};
	    this.count = 0;
	    this.spot = 0;
	  }


	  update() {
	    this.count += this.game.clockTick;

	    if(this.spot == 1) {
		this.x -= 2;
		
	    }
	    else if(this.spot == 3) {
		
		this.x += 2;
	    }
	    
	    if (this.count >= 3.60) {
		this.spot = this.pickSpot(this.spot); 
		this.count = 0;
		this.x = this.location[(this.spot)][0];
		this.y = this.location[(this.spot)][1];
		
		if(this.spot == 1) {
		    
		    this.animation.scale = 2;

		}
		else if(this.spot == 3) {
		    
		    this.animation.scale = 2;
		}
		else if(this.spot == 4) {
		    
		    this.animation.scale = .25;
		}
		else {
		    
		    this.animation.scale = .5;
		}
	    }

	  }
	    draw() {
		      this.animation.drawFrame(this.game.clockTick, this.ctx, this.x, this.y, 0);

		    }



	  pickSpot(currentSpot) {
	    var validSpots = [0, 1, 2, 3, 4]; 
	    validSpots.splice(currentSpot, 1); 
	    return validSpots[Math.floor(Math.random() * 4)];
	    
	  }

	}
class Car()
{
	constructor(name, wheels, make, model, year, status, sold_on){

		this.name = name;
		this.wheels = 4;
		this.make = make;
		this.model = model;
		this.year = year;
		this.sold_on = sold_on;
		this.status = 'packed';
		
		if(name === undefined) {
			this.name = 'Mercedez Benz';
		}
		if(model === undefined) {
			this.model = 'A-Class';
		}

	}
	move()
	{
		this.isSpeeding = false;
		//abstraction
		this.move = function() {
			var speed = 20;
		}
		//--end
		this.isMoving = true;
		this.status = 'moving';
	}

	
	speed() {
		this.isMoving = false;
		//abstraction
		this.move = function() {
			var speed = 20;
		}
		//--end
		this.isSpeeding = true;
		this.status = 'speeding';
	}
}



function Truck(name, wheels, make, model, year, status, sold_on)
{
	this.name = name;
	this.wheels = 4;
	this.make = make;
	this.model = model;
	this.year = year;
	this.sold_on = sold_on;
	this.status = 'moving';
}

Truck.prototype = new Car();
var truck = new Truck();
t
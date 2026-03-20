//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}
	getarea(){
		return this.width*this.height;
	}
	
}

class Square extends Animal {
	constructor(side) {
    super(side, side); 
  }
 getPerimeter() {
    return this.width * 4;
  }
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;













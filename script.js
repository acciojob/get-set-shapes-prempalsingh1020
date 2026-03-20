//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	get width(){
		return width;
	}
	get height(){
		return height;
	}
	getarea(){
		return width*height;
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

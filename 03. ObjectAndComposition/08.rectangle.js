function solve(width, height, color){

    let rectangle = {
        width: Number(width),
        height: Number(height),
        color: color[0].toUpperCase() + color.slice(1),
        calcArea
    }

    function calcArea(){
        return this.width * this.height;
    }

    console.log(rectangle.width);
    console.log(rectangle.height);
    console.log(rectangle.color);
    console.log(rectangle.calcArea());

    return rectangle;
}

solve(4, 5, 'red')
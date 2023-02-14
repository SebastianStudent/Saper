//Dimensions 8x10 14x18 20x24 (40px (top) left for the menu)
//Bombs E:10  M:40  H:99 (number flags are the same)
class Field
{
    constructor(height,width,top,left,backgroundColor,showfield)
    {
        this.height = height;
        this.width = width;
        this.top = top;
        this.left = left;
        this.backgroundColor = backgroundColor;
        this.showfield = showfield;
    }
}

class Bomb
{
    constructor(height,width,top,left)
    {
        this.height = height;
        this.width = width;
        this.top = top;
        this.left = left;
    }
}

class Number
{
    constructor(height,width,top,left,image,showNumber)
    {
        this.height = height;
        this.width = width;
        this.top = top;
        this.left = left;
        this.image = image;
        this.showNumber = showNumber;
    }
}

class Flag
{
    constructor(height,width,top,left)
    {
        this.height = height;
        this.width = width;
        this.top = top;
        this.left = left;
    }
}
let rectangle={
  length : 12,
  width:10,
  area:function(){
    return this.length*this.width
  },
  perimeter:function(){
    return 2*(this.length+this.width)
    
  }
}

let area= rectangle.area();
let perimeter=rectangle.perimeter();
console.log(area);
console.log(perimeter);
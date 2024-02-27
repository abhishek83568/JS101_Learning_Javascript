let data=[
  {name:"Rice",
  quantity :2,
  price:60,
   total:function(){
     return this.quantity*this.price
   }
  },
  {
    name:"dal",
    quantity:3,
    price:50,
    total:function(){
       return this.quantity*this.price
     }
  },
  {
    name:"Salt",
    quantity:1,
    price:20,
    total:function(){
       return this.quantity*this.price
     }
  }
]

let total=0;
for(let i=0;i<data.length;i++){
  total+=data[i].total();
}
console.log(total)
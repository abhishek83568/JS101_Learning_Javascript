
// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join Function

function join(arr,char){
  let bag="";
  for(let i=0;i<arr.length;i++){
    if(i==arr.length-1){
      bag=bag+arr[i];
    }else{
      bag=bag+arr[i]+char;
    }
  }
  return bag;
}
let arr=["hello","world","bye"];
let char=" ";  
let x=join(arr,char);
console.log(x);









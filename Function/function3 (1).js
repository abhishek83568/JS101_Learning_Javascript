//Write a custom function that has the same behavior of inbuilt Array Slice Function

function slice(arr,start,end)
{
  let new_arr=[];
  if(start==undefined){
    start=0;
  }
  if(end==undefined){
    end=arr.length;
  }
  for(let i=start;i<end;i++){
    new_arr.push(arr[i]);
  }
  return new_arr;
}
let arr=["ant","bison","camel","duck","elephant"];
let start=2;
let end=4;
let x=slice(arr,start,end);
console.log(x);
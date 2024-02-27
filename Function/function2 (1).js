
//Write a custom function that has the same behavior of inbuilt Array Last Index Of Function


function lastindex(arr,char)
{
  let index=-1;
  for(let i=0;i<arr.length;i++){
    if(arr[i]==char){
      index=i;
    }
  }
  return index;
}
let arr=["hello","world","bye"];
let char="world";
let x=lastindex(arr,char);
console.log(x);
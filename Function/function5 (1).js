//Write a custom function that has the same behavior of inbuilt Array Includes Function

function includes(arr,char)
{
  let flag=false;
  for(let i=0;i<arr.length;i++){
    if(arr[i]==char){
      flag=true;
    }
  }
  return flag;
}
let arr=["ant","bison","camel","duck","elephant"];
let char="camel";
let x=includes(arr,char);
console.log(x);
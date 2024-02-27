//Write a custom function that has the same behavior of inbuilt String Substring Function

function substring(str,start,end)
{
  let bag="";
  if(start==undefined){
    start=0;
  }
  if(end==undefined){
    end=str.length;
  }
  for(let i=start;i<end;i++){
    bag=bag+str[i];
  }
  return bag;
}
let str="Mozilla";
let start=1;
let end=3;
let x=substring(str,start,end);
console.log(x);
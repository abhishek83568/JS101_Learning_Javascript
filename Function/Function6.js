

function swap(str){
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower="abcdefghijklmnopqrstuvwxyz";
  let bag="";
  for(let i=0;i<str.length;i++){
    for(let j=0;j<upper.length;j++){
      if(str[i]==upper[j]){
        bag+=lower[j];
      }else if(str[i]==lower[j]){
        bag+=upper[j];
      }
    }
  }
  return bag;
}

let str="Test";
let x=swap(str);
console.log(x);


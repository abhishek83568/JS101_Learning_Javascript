/*Write a function to convert a character to lower case
Use this function to convert a given word to lower case
Use that function to convert an array of strings to array of lower case strings
Sample Input ["MA", "SA", "I", "SCH", "OOL"]
Sample Output ["ma", "sa", "i", "sch", "ool"]
*/

function toLowerCase(arr){
  let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower="abcdefghijklmnopqrstuvwxyz";
  let arr1=[];
  for(let i=0;i<arr.length;i++)
    {
      let bag="";
      for(let j=0;j<arr[i].length;j++)
        {
          for(let k=0;k<upper.length;k++)
            {
              if(arr[i][j]==upper[k])
              {
                bag+=lower[k];
              }
            }
        }
      arr1.push(bag);;
    }
  return arr1;
  
}

let arr=["MA","SA","I","SCH","OOL"];
let x=toLowerCase(arr);
console.log(x)
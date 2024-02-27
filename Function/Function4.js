function averageOfNumbers(arr)
{
  let sum=0;
  let average=0;
  if(arr.length==0)
  {
    return average;
  }
  else{
    for(let i=0;i<arr.length;i++)
    {  
        sum+=arr[i];
        
    }
    average=sum/arr.length;
    return average;
  }
  

}



let arr=[1,5,4,6]
let x=averageOfNumbers(arr);
console.log(x)
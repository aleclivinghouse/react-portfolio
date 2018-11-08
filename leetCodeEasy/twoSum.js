
// Given an array of integers, return indices
//of the two numbers such
//that they add up to a specific target.
function twoSum(target, arr){
  let hash = {};
  for(let i = 0; i < arr.length; i++){
    if(hash[target - arr[i]] === 0)	{
     return [hash[target - arr[i]], i];
    }
    hash[arr[i]]=i;
  }
}

let print = twoSum(9, [2, 6, 8, 7]);
console.log(print);


//iterate through keys
/*
var p = {
    "p1": "value1",
    "p2": "value2",
    "p3": "value3"
};

for (var key in p) {
    if (p.hasOwnProperty(key)) {
        console.log(key + " -> " + p[key]);
    }
}

 */

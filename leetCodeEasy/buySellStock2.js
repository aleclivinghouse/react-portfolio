function BuySellStock2(arr){
  var min = 999999;
  var max = -99999;
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i];
    }
    if(arr[i] < min){
      min = arr[i];
    }
  }
  buyOn = arr.indexOf(min) + 1;
  sellOn = arr.indexOf(max) + 1;
  console.log("buy on day " + buyOn + " sell on day " + sellOn);
}

BuySellStock2([2, 4, 5, 1, 8, 9]);

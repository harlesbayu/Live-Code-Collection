function howManyGifts(maxBudget, gifts){
  for (var i=1 ; i <gifts.length ;i++ ){
    for (var j=0 ; j < gifts.length;j++){
      if (gifts[i] < gifts[j]){
        var x = gifts[i]
        gifts[i] = gifts[j]
        gifts[j] = x
      }
    }
  }
  
  var hasil = 0
  for (var j=0 ; j < gifts.length ; j++){
    if (maxBudget >= gifts[j]) {
      maxBudget -= gifts[j]
      hasil += 1
    }
  }
  return hasil
 }
 
 console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
 console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
 console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
 console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
 console.log(howManyGifts(0, [10000, 3000])); // 0
 
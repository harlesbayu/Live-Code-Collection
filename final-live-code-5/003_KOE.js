function findNotRelative(arr1, arr2) {
    var hasil = []
    for (var i =0 ; i < arr1.length; i++){
      var kondisi = 0
      for (var j=0 ; j < arr2.length ; j++){
        if (arr1[i] == arr2[j]){
          kondisi +=1
        }
      }
      if ( kondisi == 0){
        hasil.push(arr1[i])
      }
    }
    return hasil
  }
  
  console.log(findNotRelative([ 3, 6, 10, 12, 15 ], [ 1, 3, 5, 10, 16 ])); // [ 6, 12, 15]
  console.log(findNotRelative([ 10, 20, 36, 59 ], [ 5, 10, 15, 59 ])); //[20, 36]
  console.log(findNotRelative([ 1, 2, 3], [2, 1, 3])); //[]
  
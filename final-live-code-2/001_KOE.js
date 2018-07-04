/**
Missing Numbers
-------------------
Implementasikan function `missingNumbers` untuk mencari
angka yang hilang dari array `numbers`.
Contoh:
  - Input: [9, 4, 2, 8]
    Output: [1, 3, 5, 6, 7]
  - Input: [8, 3, 2, 1, 7, 5, 6]
    Output: [4]
  - Input: [4, 2, 3, 1]
    Output: []

RULES:
--------
- WAJIB MENGGUNAKAN ALGORITMA/PSEUDOCODE
- Dilarang menggunakan built-in function:
  - .max()
  - .min()
  - .sort()
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )
*/

function missingNumbers (numbers) {
  
  // Sort terlebih dahulu
  for(var i = 0; i < numbers.length; i++){
    for(var j = 0; j < numbers.length; j++){
      if(numbers[j] > numbers[j+1]){
        var sorting = numbers[j]
        numbers[j] = numbers[j+1]
        numbers[j+1] = sorting
      }
    }
  }
  
  var arrbaru = []
  for(var k = 1; k < numbers.length; k++){
    if(numbers[k]-numbers[k-1] !== 1){
      var tambahNilai = numbers[k]-numbers[k-1]
      for(var l = 1; l < tambahNilai; l++){
        arrbaru.push(numbers[k-1]+l)
      }
    }
  }

  return arrbaru

}
//1, 5, 6, 7, 10
console.log(missingNumbers([1, 5, 10, 7, 6])); // [2, 3, 4, 8, 9]
console.log(missingNumbers([10, 1])); // [2, 3, 4, 5, 6, 7, 8, 9]
console.log(missingNumbers([90, 92, 91])); // []
console.log(missingNumbers([60, 54, 50])); // [51, 52, 53, 55, 56, 57, 58, 59]
console.log(missingNumbers([])); // []

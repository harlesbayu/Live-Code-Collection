
/*
Count solo
===========
Diberikan sebuah function countSolo, dimana function ini akan menerima parameter sebagai array
dan akan mereturn total jumlah dari angka angka yang TIDAK memiliki pasangan.

Example:
input: [ 5, 5, 6, 6, 3, 1, 2, 7, 7 ]
proses: 3 + 1 + 2
result: 6

RULES:
 - TIDAK BOLEH MENGGUNAKAN built in function .map, .filter, .reduce!
 - TIDAK BOLEH MENGGUNAKAN built in function .indexOf dan .include!

*/

function countSolo (numbers) {
  // your code here
  var sorting = numbers.sort(function(a,b){
    return a-b
  })

  var groups = []

  for(var i = 0; i < sorting.length; i++){
    var isGroup = true
    var group = []
    for(var j = 0; j < groups.length; j++){
      if(sorting[i] == groups[j][0]){
        groups[j].push(sorting[i])
        isGroup = false
      }
    }

    if(isGroup){
      group.push(sorting[i])
      groups.push(group)
    }
  }

  var result = 0

  for(var k = 0; k < groups.length; k++){
    if(groups[k].length === 1){
      result += groups[k][0]
    }
  }

  return result
}

console.log(countSolo([ 5, 5, 6, 6, 3, 1, 2, 7, 7])) // 6
console.log(countSolo([ 3, 6, 3, 6, 1, 1, 2, 1 ]))  // 2
console.log(countSolo([ 3, 3, 3, 3, 4, 5, 8, 10, 11 ])) // 38

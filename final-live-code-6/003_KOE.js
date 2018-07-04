/*
------------
NUMBERS DIVIDER
------------
PROBLEM
=======
numbersDivider adalah sebuah function yang akan menerima satu parameter berupa number.
Function akan mengembalikan array dua dimensi dimana array pertama berisi kumpulan pembagi parameter tersebut
dan array ke dua berisi penjumlahan dari angka pembagi yang ganjil

Contoh:
input: 6
output:
[ [6, 3, 2, 1], 4 ]

input: 8
output:
[ [8, 4, 2, 1], 1 ]

input: 13
output:
[ [13, 1], 14 ]

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
- Dilarang menggunakan .reduce, .map, .filter
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )
- Dilarang menggunakan regex metode apapun
*/

/*
------------
NUMBERS DIVIDER
------------
PROBLEM
=======
numbersDivider adalah sebuah function yang akan menerima satu parameter berupa number.
Function akan mengembalikan array dua dimensi dimana array pertama berisi kumpulan pembagi parameter tersebut
dan array ke dua berisi penjumlahan dari angka pembagi yang ganjil

Contoh:
input: 6
output:
[ [6, 3, 2, 1], 4 ]

input: 8
output:
[ [8, 4, 2, 1], 1 ]

input: 13
output:
[ [13, 1], 14 ]

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
- Dilarang menggunakan .reduce, .map, .filter
- Dilarang menggunakan spread operator ( abaikan jika tidak tahu ini apa, belum penting untuk sekarang :) )
- Dilarang menggunakan regex metode apapun
*/

function numbersDivider(num) {
    var arr = []
    for(var i = 1; i <= num; i++){
      if(num % i == 0){
        arr.push(i)
      }
    }
  
    // return arr  
    arr.sort(function(a,b){
      return b-a
    })
    
    var num = 0
    for(var j = 0; j < arr.length; j++){
      if(arr[j] % 2 !== 0){
        num = num + arr[j]
      }
    }
  
    var result = []
    result.push(arr)
    result.push(num)
  
    return result
}

console.log(numbersDivider(6));      // [ [6, 3, 2, 1], 4 ]
console.log(numbersDivider(8));     // [ [8, 4, 2, 1], 1 ]
console.log(numbersDivider(13));     // [ [13, 1], 14 ]
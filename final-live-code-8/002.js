/**

How Many Gifts
==============

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya, sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyGifts(maxBudget, gifts)
  Parameter pertama adalah budget Sergei, yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh. Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

Asumsi:
- Semua angka akan memiliki nilai >= 0, dan array tidak akan pernah kosong.

RULE:
 WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 //DILARANG MENGGUNAKAN BUILT IN FUNCTION SORT DARI ARRAY JAVASCRIPT

*/
/*
// Pseudocode
FUNCTION howManyGifts
parameter : maxBudget(type data : number), gifts(type data : array)
START
  STORE 'i' EQUALS TO 0
  STORE 'j' EQUALS TO 0
  FOR 'i' LESS THEN gifts.length
    FOR 'j' LESS THEN gifts.length
      IF gifts[j] BIGGER THEN gifts[j+1]
        STORE sorting EEQUALS TO gifts[j]
        gifts[j] = gifts[j+1
        gifts[j+1] = sorting
      END IF
    j++
    END FOR
  i++
  END FOR

  STORE 'remains' with maxBudget
  STORE 'result' with type data array

  FOR 'k' LESS THEN gifts.length-1
    IF remains >= 0 AND remains >= gifts[k]
       remains = remains - gifts[k]
       result.push(remains)
    END IF
  END FOR
  
  RETURN result.length
END FUNCTION

*/

function howManyGifts(maxBudget, gifts){
  // your code here
   for(var i = 0; i < gifts.length; i++){
    for(var j = 0; j < gifts.length; j++){
      if(gifts[j] > gifts[j+1]){
        var sorting = gifts[j]
        gifts[j] = gifts[j+1]
        gifts[j+1] = sorting
      }
    }
  }

  var remains = maxBudget
  var result = []

  for(var k = 0; k < gifts.length-1; k++){
    if(remains >= 0 && remains >= gifts[k]){
      remains = remains - gifts[k]
      result.push(remains)
    }
  }

  return result.length
  
}

console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyGifts(0, [10000, 3000])); // 0

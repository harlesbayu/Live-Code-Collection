/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder. //
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!. //3.8
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

function averageLengthWord(words) {
  // Code here
  var newStr = ''
  for(var i = 0; i < words.length; i++){
    if(words[i] !== ' '){
      newStr += words[i]
    } else {
      newStr += ''
    }
  }

  var arr = []
  var newStr2 = ''
  for(var j = 0; j < words.length; j++){
    if(words[j] !== ' '){
      newStr2 += words[j]
    } else {
      arr.push(newStr2)
      newStr2 = ''
    }
  }arr.push(newStr2)

  var lengthNewStr = newStr.length
  var arrLEngth = arr.length

  var pembanding = Math.round(lengthNewStr/arrLEngth)

  var result = []
  for(var k = 0; k < arr.length; k++){
    if(arr[k].length === pembanding){
      result.push(arr[k])
    }
  }

  return result

}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []
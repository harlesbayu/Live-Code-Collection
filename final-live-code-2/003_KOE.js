/**
===============
NON PALINDROME
===============

Problem
--------
nonPalindrome adalah sebuah function yang akan menerima satu parameter bertipe string.
Function ini akan mengembalikan array satu dimensi yang berisikan kumpulan kata yang tidak palindrome.

Contoh 1:
input: 'Wow mereka janji bertemu di makam'
output: ['mereka', 'janji', 'bertemu', 'di']

Contoh 2:
input: 'Katak naik honda civic pada malam hari di mimpi Dimitri'
output: ['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']


RULES:
- Tidak boleh menggunakan .reverse(), .join()

**/

function nonPalindrome(sentence) {
    var arr = []
    var newSentence = ''
    for(var i = 0; i < sentence.length; i++){
      if(sentence[i] !== ' '){
        newSentence += sentence[i]
      } else {
        arr.push(newSentence)
        newSentence = ''
      }
    }
    arr.push(newSentence)
  
    var arrKedua = []
    for(var j = 0; j < arr.length; j++){
      var palindrome = arr[j].toLowerCase()
  
      var str = ''
      for(var k = palindrome.length-1; k >= 0; k--){
        str += palindrome[k]
      }
  
      if(palindrome !== str){
        arrKedua.push(palindrome)
      }
    }
  
    return arrKedua
  
}
  
console.log(nonPalindrome('Wow mereka janji bertemu di makam'));
//['mereka', 'janji', 'bertemu', 'di']
  
console.log(nonPalindrome('Katak naik honda civic pada malam hari di mimpi Dimitri'));
//['naik', 'honda', 'pada', 'hari', 'di', 'mimpi', 'Dimitri']
  
console.log(nonPalindrome('kasurrusak kalo dipisah menjadi kasur rusak'));
//['kalo', 'dipisah', 'menjadi', 'kasur', 'rusak']
  
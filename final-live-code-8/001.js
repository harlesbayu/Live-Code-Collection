/*
======================
Highest Global Minimum
======================

Name :_____________

[INSTRUCTIONS]

highestGlobalMinimum adalah sebuah function yang menerima dua parameter, dan keduanya merupakan array of number.
Function akan mendapatkan angka minimum dari masing-masing array yang diinput sebagai parameter, kemudian bandingkan kedua angka tersebut.
Function akan me-return salah satu dari angka minimum yang paling besar.

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Hanya boleh menggunakan sintaks for/while dan if-else untuk pemecahan masalah.
- Penggunaan sintaks Math.min, simbol ..., dan function .apply tidak diperbolehkan.
- Penggunaan sintaks .sort() array tidak diperbolehkan.

[]

[EXAMPLE]
highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])

firstArr = [1, 1, 1]
secondArr = [8, 15, 17, 9]

nilai minimum dari firstArr = 1
nilai minimum dari secondArr = 8

karena 1 < 8, maka function highestGlobalMinimum akan me-return 8.
*/

/*
// Pseudocode
FUNCTION highestGlobalMinimum
parameter : firstArr(type data : array), secondArr(type data : array)
START
  STORE 'i' EQUALS TO 0
  STORE 'j' EQUALS TO 0
  FOR 'i' LESS THEN firstArr.length
    FOR 'j' LESS THEN firstArr.length
      IF firstArr[j] BIGGER THEN firstArr[j+1]
        STORE sorting EEQUALS TO firstArr[j]
        firstArr[j] = firstArr[j+1
        firstArr[j+1] = sorting
      END IF
    j++
    END FOR
  i++
  END FOR

  STORE 'k' EQUALS TO 0
  STORE 'l' EQUALS TO 0
  FOR 'k' LESS THEN secondArr.length
    FOR 'l' LESS THEN secondArr.length
      IF secondArr[l] BIGGER THEN secondArr[l+1]
        STORE sorting EEQUALS TO secondArr[l]
        secondArr[l] = secondArr[l+1]
        secondArr[l+1] = sorting
      END IF
    l++
    END FOR
  k++
  END FOR

  IF secondArr[0] LESS THEN firstArr[0]
    return firstArr[0]
  ELSE IF firstArr[0] LESS THEN secondArr[0]
    return secondArr[0]
  END IF
END FUNCTION
*/

function highestGlobalMinimum(firstArr, secondArr) {
  // only write code here

  for(var i = 0; i < firstArr.length; i++){
    for(var j = 0; j < firstArr.length; j++){
      if(firstArr[j] > firstArr[j+1]){
        var sorting = firstArr[j]
        firstArr[j] = firstArr[j+1]
        firstArr[j+1] = sorting
      }
    }
  }

  for(var k = 0; k < secondArr.length; k++){
    for(var l = 0; l < secondArr.length; l++){
      if(secondArr[l] > secondArr[l+1]){
        var secondSorting = secondArr[l]
        secondArr[l] = secondArr[l+1]
        secondArr[l+1] = secondSorting
      }
    }
  }

  if(secondArr[0] < firstArr[0]){
    return firstArr[0]
  }
  else if(firstArr[0] < secondArr[0]){
    return secondArr[0]
  }

}

console.log(highestGlobalMinimum([1, 1, 1] , [8, 15, 17, 9])); // 8
console.log(highestGlobalMinimum([4, 8, 9, 12] , [33, 88, 99 ,11])); // 11
console.log(highestGlobalMinimum([1, 2, 5, 2, 2] , [67, 45, 55])); // 45
console.log(highestGlobalMinimum([6, 2, 4, 10, 8, 2] , [6, 5, 13, 23])); // 5
console.log(highestGlobalMinimum([5, 11, 18, 6], [3, 1, 8, 13])); // 5


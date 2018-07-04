/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*

---------------
Students Report
---------------

PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:

[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]

Data di atas merupakan campuran seluruh nilai student dari kelas manapun.

Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:

[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]

Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
  var kelas = []
  for (var i =0 ; i < studentGrades.length ; i++){
    kelas.push(studentGrades[i].classCode)
  }
  var x = []
  for (var j=0 ;  j < kelas.length ; j++){
    var kondisi = false
    for (var k =0 ; k < x.length ; k++){
      if (kelas[j] == x[k]){
        kondisi = true
      }
    }
    if (kondisi == false){
      x.push(kelas[j])
    }
  }
  // console.log(x)
  var hasil = []
  for (var i=0 ; i <x.length ; i++){
    var tampung = []
    var tampungx = []
    var tampung2 = {}
    for (var j=0 ; j < studentGrades.length ; j++){
      if (x[i] == studentGrades[j].classCode && studentGrades[j].score >= 70){
        tampung.push(studentGrades[j].name)
        tampung2['classCode'] = x[i]
        tampung2['passed'] = tampung
      }
      else if (x[i] == studentGrades[j].classCode && studentGrades[j].score <= 70){
        tampungx.push(studentGrades[j].name)
        tampung2['classCode'] = x[i]
        tampung2['failed'] = tampungx
      }
    }
    hasil.push(tampung2)
  }
 return hasil
}

var grades1 = [
  { name: 'John', score: 80, classCode: 'A' },
  { name: 'Mike', score: 60, classCode: 'B' },
  { name: 'Budi', score: 70, classCode: 'C' },
  { name: 'Siti', score: 50, classCode: 'A' },
  { name: 'Aaron', score: 10, classCode: 'A' },
  { name: 'Arthur', score: 10, classCode: 'C' },
  { name: 'Osass', score: 10, classCode: 'B' },
  { name: 'Yolo', score: 90, classCode: 'C' },
  { name: 'Ari Supriatna',score: 90, classCode: 'B'}
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'Siti', 'Aaron' ], failed: [ 'John' ] },
  { classCode: 'B', passed: [ 'Mike', 'Osass' ], failed: [] },
  { classCode: 'C', passed: [ 'Arthur' ], failed: [ 'Budi', 'Yolo' ] },
]
*/
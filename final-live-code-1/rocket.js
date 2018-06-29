/*
**************
FASTEST CLIMBER
**************
Fastest climber adalah sebuah function yang menerima sebuah parameter berupa string.
Dimana pada string tersebut, terdapat nama nama pemanjat tebing, dan waktu nya dalam bentuk jam dan menit.
Function dibawah akan mereturn nama pemanjat tebing tercepat.

RULES:
 - DILARANG menggunakan REGEX
 - DILARANG menggunakan muilt in function .reduce(), .map(), .filter()
 - DILARANG menggunakan built in function .indexOf(), dan .include()
 - DILARANG menggunakan built in function .split()
*/

function fastestClimber (str) {
  // your code here
  var strSplit = str.split(',')
  var hasil = []
  for(var i = 0; i < strSplit.length; i++){
    hasil.push(strSplit[i].split(':'))
  }
  
  for(var j = 0; j < hasil.length; j++){
    hasil[j].push(parseInt(hasil[j][1].slice(1,2)*60) + parseInt(hasil[j][1].slice(6,8))) 
  }
  
  hasil.sort(sortFunction);
    function sortFunction(a, b) {
    if (a[2] === b[2]) {
      return 0;
      }
    else {
      return (a[2] < b[2]) ? -1 : 1;
    }
  }

  return hasil[0][0]

}

console.log(fastestClimber('Kyle: 1jam 30menit,Nein: 2jam 30menit,Light: 0jam 59menit')) // Light
console.log(fastestClimber('Retsu: 1jam 30menit,Tokichi: 2jam 01menit,Go: 1jam 59menit')) // Retsu
console.log(fastestClimber('Awtian: 1jam 01menit,Pipu: 1jam 11menit,Caca: 1jam 59menit')) // Awtian

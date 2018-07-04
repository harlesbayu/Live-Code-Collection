/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa huruf x / y / z
di dalam `str`.
Contoh ada di test cases

RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
 
*/

/**
Virus Check
-----------
Implementasikan function `virusCheck` untuk menghitung ada berapa huruf x / y / z
di dalam `str`.
Contoh ada di test cases

RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX
 
*/

function virusCheck (str) {
    var lower = str.toLowerCase()
    var virus = 'xyz'
    var num = 0
  
    for(var i of virus){
      // console.log(i)
      for(var j of lower){
        // console.log('ini j => ' + j)
        if(i === j){
          num++
        } 
      }
    }
  
    if(num === 0){
      return 'No virus detected'
    } else if (num === 1) {
      return num + ' virus detected'
    } else {
      return num + ' viruses detected'
    }
  
  }
  
  console.log(virusCheck('qlD4MZax0raQqew')); // 2 viruses detected
  console.log(virusCheck('HH0NBP1zRa')); // 1 virus detected
  console.log(virusCheck('4O4TmIF6ONaiMlzpXxPqwy')); // 4 viruses detected
  console.log(virusCheck('mjBgPlzks')); // 1 virus detected
  console.log(virusCheck('AIn4Ks05bBaa')); // No virus detected
  console.log(virusCheck('RsMFjBUjvIaP')); // No virus detected
  console.log(virusCheck('')); // No virus detected
  

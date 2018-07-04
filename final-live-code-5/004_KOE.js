function averageLengthWord(words) {
    var kalimat = ''
    var JumlahKata = 1
    var kata = []
    
    for (var i =0 ; i < words.length ; i++){
      if (words[i] == ' '){
        kalimat +=  ''
        JumlahKata +=1
      }
      else {
        kalimat += words[i]
      }
    }
    
    var jumlahKalimat = kalimat.length
    var rata = Math.round(jumlahKalimat/JumlahKata)
    var cek = 0
    for (var j=0 ; j < words.length ; j++){
      if (words[j] == ' '){
        kata.push(words.substring(cek,j))
        cek = j+1
      }
      else if (j == words.length-1){
        kata.push(words.substring(cek,j+1))
      }
    }
    
    var hasilFinal = []
    for (var k=0 ; k < kata.length ; k++){
      if (kata[k].length == rata){
        hasilFinal.push(kata[k])
      }
    }
  return hasilFinal
  }
  
  console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
  console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
  console.log(averageLengthWord('I am diligent')); // []
  
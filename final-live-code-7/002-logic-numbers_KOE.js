function lostNumbers(first, second, third) {
    var angka = []  
    angka.push(first)
    angka.push(second)
    angka.push(third)
    
    for (var i =1 ; i < angka.length ; i++){
      for (var j=0 ; j < i ; j++){
        if (angka[i] < angka [j]){
          var x = angka[i]
          angka[i] = angka[j]
          angka[j] = x
        }
      }
    }
  
    var komplit = []  
    for ( var i = angka[0] ; i <= angka[angka.length-1]  ; i++){
      komplit.push(i)
    }
 
    if (angka.length == komplit.length){
      return ''
    }
    
    var hasilFinal = []
    for (var i=0 ; i < komplit.length ; i++){
      var kondisi = 0
      for (var j=0 ; j < angka.length ; j++){
        if (komplit[i] == angka[j]){
          kondisi +=1
        }
      }
      if (kondisi ==0 ){
        hasilFinal.push(komplit[i])
      }
    }
    return hasilFinal
  }
  
  console.log(lostNumbers(6, 5, 1));
  // 4
  
  console.log(lostNumbers(3, 1, 2));
  // (TIDAK ADA YANG DITAMPILKAN CONSOLE)
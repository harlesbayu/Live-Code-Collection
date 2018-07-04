function highestTopSpeed (data) {
    var hasil = []
    var cek = 0
  
    if (data == ''){
      return ''
    }
    for (var i =0 ; i <data.length ; i++){
      if (data[i]== ':'){
        hasil.push(data.slice(i+1,i+4))
      }
    }
  var hasilFinal = []
    for (var j=0 ; j < hasil.length-1 ; j++){
      if (hasil[j] > hasil[j+1]){
        hasilFinal.push(hasil[j])
      }
      else if (hasil[j] > hasil[j+1]){
        hasilFinal.push(hasil[j+1])
      }
    }
    return hasilFinal[0]
  }
  
  console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
  // 180
  
  console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
  // 200
  
  console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
  // 175
  
  console.log(highestTopSpeed(''));
  // No data
  
  
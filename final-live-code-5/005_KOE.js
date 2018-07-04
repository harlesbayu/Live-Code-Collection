
function initialGrouping(studentsArr) {
  var hasil = {}
  for (var i=0 ; i<studentsArr.length ; i++){
    var tampung = []
    for (var j=0 ; j < studentsArr.length ; j++){
      if (studentsArr[i][0] == studentsArr[j][0]){
        tampung.push(studentsArr[j])
        hasil[studentsArr[i][0]] = tampung
      }
    }
  }
  return hasil
}



console.log(initialGrouping(['Budi', 'Badu', 'Joni', 'Jono']));
/*
{
  B: [ 'Budi', 'Badu' ],
  J: [ 'Joni', 'Jono' ]
}
*/

console.log(initialGrouping(['Mickey', 'Yusuf', 'Donald', 'Ali', 'Gong']));
/*
{
  M: [ 'Mickey' ],
  Y: [ 'Yusuf' ],
  D: [ 'Donald' ],
  A: [ 'Ali' ],
  G: [ 'Gong' ]
}
*/

console.log(initialGrouping(['Rock', 'Stone', 'Brick', 'Rocker', 'Sticker']));
/*
{
  R: [ 'Rock', 'Rocker' ],
  S: [ 'Stone', 'Sticker' ],
  B: [ 'Brick' ]
}
*/

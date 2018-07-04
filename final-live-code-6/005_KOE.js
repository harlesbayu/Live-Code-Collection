/**
CSV to Object
-------------
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }

  RULES
  =====
  - Dilarang menggunakan built in function .split

*/

function convertToObject (keys, values) {
  var value = []
  var key = []
  var checkpoint = 0
  var cek = 0

  for(var i = 0; i < keys.length; i++){
    if(keys[i] === ','){
      key.push(keys.substring(checkpoint,i))
      checkpoint = i+1
    } else if(i === keys.length-1){
      key.push(keys.substring(checkpoint,i+1))
    }
  }

  for(var j = 0; j < values.length; j++){
    if(values[j] === ','){
      value.push(values.substring(cek,j))
      cek = j+1
    } else if(j === values.length-1){
      value.push(values.substring(cek,j+1))
    }
  }

  var result = {}

  for(var i = 0; i < key.length; i++){
    for(var j = 0; j < value.length; j++){
      result[key[j]] = value[j]
    }
  }

  return result

}


console.log(convertToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(convertToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

console.log(convertToObject('', ''));
// { }
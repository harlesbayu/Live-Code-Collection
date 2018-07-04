/*
  ================
  GET MEMBER SUMMARY
  ================

  Get member summary adalah sebuah fungsi untuk mendapatkan ringkasan informasi
  berdasarkan data-data seperti nama depan, nama belakang, dan umur. Fungsi ini
  akan mengembalikan sebuah object dengan keyName total member, anggota yang paling tua
  , anggota yang paling muda dan avarage umur semua member.

  rules:
  - TIDAK boleh menggunakan built in function .sort()
  - TIDAK boleh menggunakan built in function .indexOf(), .include()
  - TIDAK boleh menggunakan built in function .Math.max() dan .Math.min()
  - TIDAK boleh menggunakan built in function .map(), .filter()
  - TIDAK boleh menggunakan regex ( match, replace, dll)
  - asumsi data memiliki umur yang berbeda-beda

  examples:
  - INPUT =
    [{
      first_name: 'Example',
      last_name: 'Contoh',
      age: 27
    }, {
      first_name: 'Some',
      last_name: 'Thing',
      age: 22
    }, {
      first_name: 'Manusia',
      last_name: 'Biasa',
      age: 19
    }],

  - OUTPUT = {
      total_member: 3,
      oldest_member: {
        full_name: 'Example Contoh',
        age: 27,
      },
      youngest_member: {
        full_name: 'Manusia Biasa',
        age: 19,
      },
      average_member_age = 23
    }
*/

function getMemberSummary (member) {
  // your code here

  if(member == 0) {
    return []
  }

  var result = {}
  for(var i = 0; i < member.length; i++){
    var container = {}
    container.total_member = member.length
    container.oldest_member = {}
    container.youngest_member = {}
    container.average_member_age

    var pembanding = 0
    var pembanding2 = member[0].age
    var average = 0

    for(var j = 0; j < member.length; j++){
      if(member[j].age > pembanding){
        pembanding = member[j].age
        container.oldest_member.full_name = member[j].first_name + ' ' + member[j].last_name
        container.oldest_member.age = member[j].age
      }
    }

    for(var k = 0; k < member.length; k++){
      if(member[k].age <= pembanding2){
        pembanding2 = member[k].age
        container.youngest_member.full_name = member[k].first_name + ' ' + member[k].last_name
        container.youngest_member.age = member[k].age
      }
    }

    for(var l = 0; l < member.length; l++){
      average = average + member[l].age
    }

    container.average_member_age = Math.round(average / member.length)

    result = container
  }
  return result
}

console.log(getMemberSummary([{
        first_name: 'Wika',
        last_name: 'Silo',
        age: 30
      }, {
        first_name: 'Dhani',
        last_name: 'Damara',
        age: 27
      }, {
        first_name: 'Fandy',
        last_name: 'Barestu',
        age: 18
      }, {
        first_name: 'Acha',
        last_name: 'Acha',
        age: 29
      }, {
        first_name: 'Zena',
        last_name: 'Villenia',
        age: 32
      }, {
        first_name: 'Annisa',
        last_name: 'Ayu',
        age: 21
      }],
));
//output
/*
 {
   total_member: 6,
   oldest_member: {
      full_name: 'Zena Villenia',
      age: 32,
   },
   youngest_member: {
    full_name: 'Fandy Barestu',
    age: 18,
   },
   average_member_age: 26
 }
*/

console.log(getMemberSummary(
  [{
    first_name: 'Rama',
    last_name: 'Diansyah',
    age: 20
  }, {
    first_name: 'Malik',
    last_name: 'Adhi',
    age: 21
  }, {
    first_name: 'Dita',
    last_name: 'Zakiah',
    age: 27
  }]
))

/*
  total_member: 3,
  oldest_member: {
      full_name: 'Dita Zakiah',
      age: 27,
   },
  youngest_member: {
    full_name: 'Rama Diansyah',
    age: 20,
   },
   average_member_age: 23
*/

console.log(getMemberSummary(
  [{
    first_name: 'Zena',
    last_name: 'Villenia',
    age: 20
  }]
))
/*
  {
    total_member: 1,
    oldest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
    youngest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
    average_member_age: 20
  }
*/

console.log(getMemberSummary([])) //NO DATA

/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

*/

/* Algoritma 
buat variabel penampung hasil
buat variabel hurufBiasa yang berisikan alphabet
buat variabel hurufH8BI yang berisikan non alphabet
buat looping untuk cek input tiap index
    buat looping untuk cek input dengan hurufBiasa/hurufH8BI 
    dengan menggunakan if else if else statement

jika input index ke - sama dengan hurufBiasa ke - maka hasil sama dengan hurufH8BI ke -
jika input index ke - sama dengan hurufH8BI ke - maka hasil sama dengan input ke -
selebihnya hasil tidak mengalami perubahan

show the output
*/





function encrypt(input) {
  var hasil = ''
  var hurufBiasa= 'abcdefghijklmnopqrstuvwxyz'
  var hurufH8BI=  '!@#$%^&*()-+1234567890[]{}'

  for (var i=0 ; i< input.length ; i++){
    for (var j=0; j< hurufH8BI.length ; j++){
      if (input[i] == hurufBiasa[j]){
        hasil += hurufH8BI[j]
      }
      else if (input[i] == hurufH8BI[j]){
        hasil += input[i]
      }
      else {
        hasil += ''
      }
    }
  }
  return hasil
}

console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2

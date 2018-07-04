function countLetterRecursive(sentence, letter) {
    if (sentence.length == 0){
      return 0
    }
    else {
      if (sentence[0] == letter){
        return 1 + countLetterRecursive(sentence.slice(1),letter)
      }
      else {
        return 0 + countLetterRecursive(sentence.slice(1),letter)
      }
    }
  }
  
  console.log(countLetterRecursive('12104123', '1')); // 3
  console.log(countLetterRecursive('the quick brown fox', 'o')); // 2
  console.log(countLetterRecursive('lorem ipsum', 'a')); // 0
  console.log(countLetterRecursive('hahaha', 'h')); // 3
  console.log(countLetterRecursive('', 'x')); // 0
  
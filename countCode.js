function countCode(letter, codes) {

  let count = 0;

 
  for (let i = 0; i < codes.length; i++) {
   
    if (codes[i].startsWith(letter)) {
      
      count++;
    }
  }

 
  return count;
}


const codesArray = ["apple", "banana", "orange", "kiwi", "pear", "peach"];
const result = countCode("p", codesArray);
console.log(result); 

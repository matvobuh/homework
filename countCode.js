function countCode(letter, codes) {
  
  if (typeof letter === 'string' && letter.length === 1 && Array.isArray(codes)) {
   
    const filteredCodes = codes.filter(code => code.startsWith(letter));
   
    return filteredCodes.length;
  } else {
    
    return "Vigane sisend";
  }
}


const koodid = ["abcd", "efgh", "ijkl", "mnop", "iaaa", "ibbb", "iccc"];
const algustäht = "i";
const tulemus = countCode(algustäht, koodid);
console.log(`Koodide arv, mis algavad "${algustäht}" tähega: ${tulemus}`);

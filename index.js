function translate (word) {
    
    if (word.toLowerCase()[0] === "a" || 
    word[0] === "e" || 
    word[0] === "i" ||
    word[0] === "o" ||
    word[0] === "u" 
    ) {
        return word + "way"}
        
    //     else if (word.toLowerCase()[0] !== "a" || 
    // word[0] !== "e" || 
    // word[0] !== "i" ||
    // word[0] !== "o" ||
    // word[0] !== "u" 
    // ) {
    //     let consWord = 
    //     return word + "ay"}
        
        else {
            let firstLetter = word[0];
            let splitWord = word.split("");
            splitWord.splice(0,1);
            let newWord = splitWord.join("");
            return newWord + firstLetter + "ay";
        }
}

module.exports = translate

// take first letter and add it to the end of the word
// attach the first letter to "ay" at the end of the word
// 
// if a word does not start with a,e,i,o or u....  
// move each of those letters to the end of that word 
// add ay to the newly created word

// for(let i = 0; i < word.length; i++){
//     word !==a,e,i,o,u{
//       word[i] = word[i].slice(1) + word[i][0] + 'ay';
//     } 

//   }
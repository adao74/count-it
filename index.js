// Given: A string - like "Hello World"

// Output: Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1

const count = (str) => {
    const str2 = str.toLowerCase().replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~0-9\s]/g, '') // remove punctuation / special characters, numbers, and all whitespace (spaces, tabs, new lines)
    const obj = {}

    // For 1) word count 2) number of times a word appears: 
    // Remove punctuation / special characters & numbers (not words)
    // Remove spaces from start & end to prevent extra word counts (starting & trailing spaces aren't words). 
    // Lowercase the sentence so that words aren't case sensitive (i.e. "The" is the same word as "the")
    // Puts words in an array. New element is based on encountering space(s).
    // The regex expression prevents multiple spaces from creating array elements that are empty spaces. 
    const sentenceArray = str.toLowerCase().replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~0-9]/g, '').trim().split(/\s+/)  

    const wordCount = sentenceArray.length
    
    let wordObject = {};

    for (let i = 0; i < sentenceArray.length; i++) {
        if (wordObject[sentenceArray[i]]) {
            wordObject[sentenceArray[i]]++
        } else {
            wordObject[sentenceArray[i]] = 1 // create a property & assign it a value
        }
    }

    
    for (let i =0; i < str2.length; i++) {
        
        // If value already exists, increment the count
        if (obj[str2[i]]) {
            obj[str2[i]]++;
        } else {
            // create a property & assign it a value
            obj[str2[i]] = 1;
        }

        }
        
    return [obj, wordCount, wordObject]
}




console.log(count("   12Andrea    Dao!! "))
console.log(count("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."))

// Given: A string - like "Hello World"

// Output: Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1

// ES module => need .mjs extension or set "type": "module" in package.json
import {syllable} from 'syllable'

// Calculate readability https://www.thoughtco.com/calculating-reading-level-1857103
const readability = (str, wordCount) => {
    // Each element in the sentences array is a sentence.
    // 1) regex expression removes all numbers, including decimals. Removes whitespace so number of sentences won't include empty sentences. 
    // 2) Put sentences into an array, split based on periods, exclamation points, question marks
    const sentences = str.replace(/[\d\.]+|\s+/g, '').trim().split(/[.!?]/)
    const filteredSentences = sentences.filter(element => element !== ""); // rid empty elements
    const averageNumberWords = wordCount / (filteredSentences.length)

    const score = (averageNumberWords * 0.39) + (syllable(str) * 11.8) - 15.59

    return score
}


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
    
    const readingLevel = readability(str, wordCount)

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
        
    // obj: collect each letter's appearance
    // wordCount: word count
    // wordObject: collect each word's appearance
    // readingLevel: reading level
    return [obj, wordCount, wordObject, readingLevel]
}




console.log(count("   12Andrea    Dao!! You only live once."))
console.log(count("The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."))

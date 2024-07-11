// Given: A string - like "Hello World"

// Output: Letters and how often they show up. - d:1 e:1 h:1 l:3 o:2 r:1 w:1

const count = (str) => {
    const str2 = str.toLowerCase().replace(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~0-9\s]/g, '')
    const sentence = str.trim()
    const obj = {}



    
    for (let i =0; i < str2.length; i++) {
        
        // If value already exists, increment the count
        if (obj[str2[i]]) {
            obj[str2[i]]++;
        } else {
            // Set the value inside the object as a property
            obj[str2[i]] = 1;
        }

        }
        
        return obj
    }




console.log(count(" 12Andrea Dao!!"))

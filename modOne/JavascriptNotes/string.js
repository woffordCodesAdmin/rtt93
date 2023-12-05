

// Keywords: {var - let (reassignable variable) - const(cannot reassign) }

// Strings -> Text Data
    // Denoted by " "
        // has individual properties and methods in order to manipulate text data

let anExampleOfAString = 'This is an example'

// Example OF A String Method
    let capitalize = anExampleOfAString.toUpperCase()
        // Often Methods are used to redefine or translate (existing) data
    let lowercase = anExampleOfAString.toLowerCase()
    console.log("I found a method to capitalize", capitalize, "and to Lowercase", lowercase)
    
    console.log(anExampleOfAString.length)

    let myCatsName = "Kat"
    let myDogsName = "DMX"
    let myPets = myCatsName + " " + myDogsName
    console.log(myPets)
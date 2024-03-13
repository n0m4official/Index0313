txt = "abc" ;

for (char in txt) {
    // console.log(char);
    // console.log(txt[char])
    let character = txt[char]
    list_vowels = ["a", "e", "i", "o", "u"]
    // if (character == "a" ||
    //     character == "e" ||
    //     character == "i" ||
    //     character == "o" ||
    //     character == "u")
    if (character in list_vowels) {
        console.log("yes")
    } else {
        console.log(`${character} is not a vowel`)
    }
}
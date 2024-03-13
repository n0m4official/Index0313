txt = "abc" ;

for (char in txt) {
    // console.log(char);
    // console.log(txt[char])
    let character = txt[char]
    list_vowels = ["a", "e", "i", "o", "u"]
    for (vowel in list_vowels) {
        if (vowel == char) {
            console.log(`${character} is a vowel ${char}`)
        } 
        else {
            console.log(`${character} is not a vowel`)
        }
    }
}
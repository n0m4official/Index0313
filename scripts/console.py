txt = input("Input text: ")
def count_vowel(txt):
    vowel_count = 0
    for char in txt:
        if char in ["a", "e", "i", "o", "u"]:
            vowel_count += 1
    return vowel_count

print(f"Number of vowels in {txt} is {count_vowel(txt)}")
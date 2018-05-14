def duplicate_encode(word):
    str = ''
    for letter in word:
        count = 0
        for letter2 in word:
            if letter.lower() == letter2.lower():
                count += 1
        if count > 1:
            str += ')'
        else:
            str += '('
    return str

print(duplicate_encode('din'))
print(duplicate_encode('recede'))
print(duplicate_encode('Success'))
print(duplicate_encode('(( @'))

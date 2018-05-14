def countBits(n):
    count = 0
    while n > 0:
        if n % 2 == 1:
            count += 1
        n /= 2
        n = round(n - .1)
        print(n)
    return count

print (countBits(7))
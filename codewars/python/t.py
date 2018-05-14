def iq_test(numbers):
    is_odd = 0

    nums = []
    for num in numbers.split(' '):
        nums.append(int(num))

    for num in nums:
        if num % 2 == 0:
            is_odd += 1
        else:
            is_odd -= 1
    
    if is_odd > 0:
        i = 0
        for num in nums:
            i += 1
            if num % 2 == 1:
                return i
    else:
        i = 0
        for num in nums:
            i += 1
            if num % 2 == 0:
                return i
    return 0

print(iq_test("2 4 7 8 10"))
print(iq_test("1 2 2"))

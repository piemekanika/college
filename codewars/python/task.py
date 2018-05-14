from functools import reduce

primesL = [2, 3]
limit = 200

def count_find_num(primesL, limit):    
    basic_value = reduce(lambda x, y: x * y, primesL)

    if basic_value > limit:
        return []
    elif basic_value == limit:
        return [1, basic_value]
    
    count = 1

    curr_value = basic_value
    max_value = basic_value

    for num in primesL:
        while curr_value <= limit:
            curr_value *= num
            if curr_value <= limit:
                count += 1
                if curr_value > max_value:
                    max_value = curr_value        

        

        curr_value = basic_value

    return [count, max_value]

print(count_find_num(primesL, limit))
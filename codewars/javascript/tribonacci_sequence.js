function tribonacci(signature, n) {
    var nextValue = 0;

    if (n == 0) return [];
    else if (n == 1) {
        signature.pop();
        signature.pop();
        return signature;
    }
    else if (n == 2) {
        signature.pop();
        return signature;
    }
    else if (n == 3) {
        return signature;
    }

    for (var i = 0; i < n - 3; i++) {
        nextValue = 0;
        
        for (var j = i + 2; j >= i; j--)
            nextValue += signature[j];
        
        signature.push(nextValue);
    }

    return signature;
}

console.log(tribonacci([1, 1, 1], 1));
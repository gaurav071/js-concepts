const fib = (num, previousValue = []) => {
    if (previousValue[num] != null) {
        return previousValue[num];
    }

    let result;
    if (num <= 2) {
        result = 1;
    } else {
        result = fib(num - 1, previousValue) + fib(num - 2, previousValue);
    }

    previousValue[num] = result;
    return result;
}

console.log(fib(41));

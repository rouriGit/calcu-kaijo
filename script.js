function calculateFactorial() {
    const input = document.getElementById('factorialInput').value.trim();
    const match = input.match(/^(\d+)!$/);

    if (!match) {
        document.getElementById('result').innerText = '正しい形式で入力してください (例: 5!)';
        return;
    }

    const number = parseInt(match[1], 10);
    const result = factorial(number);

    document.getElementById('result').innerText = `${number}! = ${result}`;
}

function factorial(n) {
    if (n < 0) return -1; // 階乗は負の数には定義されない
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

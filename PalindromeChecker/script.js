function checkPalindrome() {
    const inputElement = document.getElementById('text-input');
    if (!inputElement.value.trim()) {
        alert('Please input a value');
        return;
    }

    const resultElement = document.getElementById('result');
    const inputValue = inputElement.value.trim();

    // Normalize the input: remove non-alphanumeric characters and convert to lowercase
    const normalizedValue = inputValue.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the normalized value is a palindrome
    const isPalindrome = normalizedValue === normalizedValue.split('').reverse().join('');

    if (isPalindrome) {
        resultElement.textContent = `${inputValue} is a palindrome`;
    } else {
        resultElement.textContent = `${inputValue} is not a palindrome`;
    }
}

document.getElementById('check-btn').addEventListener('click', checkPalindrome);
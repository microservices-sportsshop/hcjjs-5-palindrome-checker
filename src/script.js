document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn");
    const result = document.querySelector(".result");

    const isPalindrome = (str) => {
        const len = str.length;
        const start = str.substring(0, Math.floor(len / 2)).toLowerCase();
        const end = str.substring(len - Math.floor(len / 2)).toLowerCase();
        const reverseEnd = [...end].reverse().join("");
        return start === reverseEnd;
    };

    const checkPalindrome = () => {
        const word = document.querySelector(".input-text").value;

        if (word.trim() === "") {
            result.innerHTML = "Please enter a word.";
            return;
        }

        result.innerHTML = isPalindrome(word) ? `${word.toUpperCase()} is a palindrome` : `${word.toUpperCase()} is NOT a palindrome`;

    };

    btn.addEventListener("click", checkPalindrome);
});

let letters = []; // This is our stack

let word = "SOSO";
let rword = "";

// push letters to stack
for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

// pop off letters from stack and store into rword
for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if (word === rword) {
    console.log("Its a Palindrome");
} else {
    console.log("Its not a Palindrome");
}
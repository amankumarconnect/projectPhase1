const quotes = [
    "Believe in yourself!",
    "Stay positive, work hard, make it happen.",
    "Success is not final, failure is not fatal.",
    "Dream big and dare to fail.",
    "Do what you love and you'll never work a day in your life."
];

function showQuote() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.querySelector(".quote").textContent = `"${randomQuote}"`;
}

showQuote();
setInterval(showQuote, 10000); 
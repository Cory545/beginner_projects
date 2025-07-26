let quotes = [
    "I am the punishment of God...If you had not committed great sins, God would not have sent a punishment like me upon you.",
    "An action commited in anger, is an action doomed to failure.",
    "Attack with aggression, but always have a plan of retreat",
    "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
    "Push through the pain, giving up hurts more!",
    "If you never listen to anyone, you can't give proper advice",
    "Sometimes, we have to look beyond what we want, and do what's best"
];

let quoteAuthors = [
    "Genghis Khan",
    "Genghis Khan",
    "Genghis Khan",
    "Marcus Aurelius",
    "Vegeta",
    "Monk Momoaki",
    "Piccolo"
];

let button = document.getElementById("button");
let textSection = document.getElementById("textSection");
let author = document.getElementById("author");
let copyButton = document.getElementById("copyButton");

let currentQuote = "";

button.addEventListener("click", quoteGeneration);

function quoteGeneration() {
    let randomNumber = Math.floor(Math.random() * quotes.length);
    let quote = quotes[randomNumber];
    let quoteAuthor = quoteAuthors[randomNumber];

    textSection.innerText = quote;
    author.innerText = quoteAuthor;

    currentQuote = `"${quote}" – ${quoteAuthor}`;
}

copyButton.addEventListener("click", copyQuote);

function copyQuote() {
    navigator.clipboard.writeText(currentQuote)
        .then(() => {
            alert("Quote copied to clipboard!");
        })
        .catch(err => {
            alert("Failed to copy quote.");
            console.error(err);
        });
}

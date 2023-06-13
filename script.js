function generate() {
    var quotes = {
        "- Jules Renard" : "The truly free man is the one who can turn down an invitation to dinner without giving an excuse.",
        "- Albert Einstein" : "Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.",
        "- Pierce Brown" : "Man cannot be freed by the same injustice that enslaved it.",
        "- Aaron Lauritsen" : "The struggles we endure today will be the ‘good old days’ we laugh about tomorrow."
    }

    var authors = Object.keys(quotes);

    var author = authors[Math.floor(Math.random() * authors.length)];

    var quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}
var quotes = [
    "“Be yourself; everyone else is already taken.” ― Oscar Wilde ",
    "“So many books, so little time.” ― Frank Zappa ",
    "Be the change that you wish to see in the world.” ― Mahatma Gandhi ",
    "“In three words I can sum up everything I've learned about life: it goes on.” ― Robert Frost "
];

 function displayQuote(){
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var quoteElement = document.getElementById('quote');
     quoteElement.textContent = quotes[randomIndex];
 }
 document.getElementById('quoteButton')





  
/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// first i defined de constant variable named quotes using array function
const quotes = [
 {quote: "Every blessing ignored becomes a curse.",
  source: "Paulo Coelho,",
  citation: "The Alchemist,",
  year: 1993,
},

{ quote: "But how could you live and have no story to tell?",
  source: "Fyodor Dostoevsky,",
  citation: "White Nights,",
  year: 1848,
},

{ quote: "Love in action is a harsh and dreadful thing compared to love in dreams",
  source: "Fyodor Dostoevsky,",
  citation: "The Brothers Karamazov,",
  year: 1879,
},

{ quote: "We accept the love we think we deserve.",
  source: "Stephen Chbosky,",
  citation: "The Perks of Being a Wallflower,",
  year: 1999,
},

{ quote: "Give a man a fish and he will eat for a day. Teach a man to fish and he will eat for a lifetime. Teach a man to create an artificial shortage of fish and he will eat steak.",
  source: "Jay Leno,",
  year: 1950,
},

{ quote: "I have you and even if we never meet or ever see each other, we have left our thumbprints in the thick, moist clay of each other's lives.",
  source: "Hugh Elliott,",
  citation: "Standing Room Only,",
  year: 2003,
},

{ quote: "The stupid neither forgive nor forget; the naive forgive and forget; the wise forgive but do not forget.",
  source: "Thomas Szasz,",
  citation: "The Second Sin,",
  year: 1973,
},

{ quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
  source: "J.K. Rowling,",
  citation: "Harry Potter and the Goblet of Fire,",
  year: 2000,
},

{ quote: "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
  source: "Friedrich Nietzsche,",
  citation: "Beyond Good and Evil,",
  year: 1886,
},

{ quote: "There is no greater agony than bearing an untold story inside you.",
  source: "Maya Angelou,",
  citation: "I Know Why the Caged Bird Sings,",
  year: 1928,
},

]

// then i created the getRandomQuote function. 
function getRandomQuote() {
  //first created a variable for a random number from 0 to the index of the lenght of my quotes array
  let randomNumber = Math.floor(Math.random() * quotes.length)
  let quoteshow = quotes[randomNumber]
  return quoteshow
  // this returns a random quote :)
}

/***
 * `printQuote` function
***/

function printQuote() {
  // i will create a new variable to vall the getRandomquote function and store it 
var randomQuote = getRandomQuote();
// now i will create the html string
var quoteOutput = '<p class= "quote">' + randomQuote.quote + '</p>';
quoteOutput += '<p class="source">'+randomQuote.source;
// if statement tests if the quote object containes the information, if not it will leave it out . if it is available it creates the html format 
if (randomQuote.citation != undefined) {
  quoteOutput += '<span class="citation"> ' + randomQuote.citation + '</span>';
}

if (randomQuote.category != undefined) {
  for (i = 0; i < randomQuote.category.length; i++) {
    quoteOutput += '<p class="category"> ' + randomQuote.category[i] + '</p>';
  }
}
// lastly close the tag 
quoteOutput += '</p>';
// add the code snippet from tree house to update my html with a random quote 
document.getElementById('quote-box').innerHTML = quoteOutput;
}
// add code snippet from tree house to get the cic button which reloads out my print qute function
document
	.getElementById('loadQuote')
	.addEventListener('click', printQuote, false);





 

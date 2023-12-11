const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();

const { quotes, biographies } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

// Add a PUT route for updating quotes
app.put('/api/quotes/:id', (req, res) => {
  const { id } = req.params;
  const { quote, person } = req.body;

  // Find the quote by ID
  const foundQuote = quotes.find((q) => q.id === parseInt(id));

  // If the quote is found, update it
  if (foundQuote) {
    foundQuote.quote = quote;
    foundQuote.persona = person;

    // Send the updated quote in the response
    res.json({
      quote: foundQuote,
    });
  } else {
    // If the quote is not found, send a 404 response
    res.status(404).json({ error: 'Quote not found.' });
  }
});

// Add a DELETE route for deleting quotes
app.delete('/api/quotes/:id', (req, res) => {
  const { id } = req.params;

  // Find the index of the quote by ID
  const index = quotes.findIndex((q) => q.id === parseInt(id));

  // If the quote is found, remove it from the array
  if (index !== -1) {
    const deletedQuote = quotes.splice(index, 1);

    // Send the deleted quote in the response
    res.json({
      quote: deletedQuote[0],
    });
  } else {
    // If the quote is not found, send a 404 response
    res.status(404).json({ error: 'Quote not found.' });
  }
});

// Add year information to quotes
app.get('/api/quotes', (req, res) => {
  const { person, year } = req.query;

  // Filter quotes based on the 'person' query parameter, if present
  let filteredQuotes = quotes;
  if (person) {
    filteredQuotes = filteredQuotes.filter((quote) => quote.persona === person);
  }

  // Filter quotes based on the 'year' query parameter, if present
  if (year) {
    filteredQuotes = filteredQuotes.filter((quote) => quote.year === year);
  }

  // Send the response with the required shape
  res.json({
    quotes: filteredQuotes.map((quote) => ({
      quote: quote.quote,
      persona: quote.persona,
      year: quote.year, // Adjust based on your data structure
    })),
  });
});

// Add another resource for biographies
const biographiesRouter = require('./biographies'); // Adjust the path accordingly
app.use('/api/biographies', biographiesRouter);

// Define a route to get a random quote
app.get('/api/quotes/random', (req, res) => {
  const randomQuote = getRandomElement(quotes);

  // Send the response with the required shape
  res.json({
    quote: randomQuote.quote,
    persona: randomQuote.persona,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

const express = require('express')
const app = express()
const PORT = 8000

const quotes = {
  'patrick': {
    'speaker': 'Patrick', 
    'quote': `You're my Mariah Carey.`, 
    'episode': `S4E12: Singles Week`
  },
  'david': {
    'speaker': 'David', 
    'quote': `I'm trying very hard not to connect with people right now.`,
    'episode': `S1E2: The Drip`
  }, 
  'moira': {
    'speaker': 'Moira',
    'quote': 'What you did was impulsive, capricious, and melodramatic. But it was also wrong.',
    'episode': `S2E1: Finding David`
  },
  'alexis': {
    'speaker': 'Alexis',
    'quote': `I didn't go missing David, the FBI knew where I was the entire time!`,
    'episode': `S2E1: Finding David`
  },
  'unknown': {
    'speaker': 'unknown',
    'quote': 'unknown',
    'episode': 'unknown'
  }
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:speaker', (request, response) => {
  const speakerName = request.params.speaker.toLowerCase()
  
  if (quotes[speakerName]) {
    response.json(quotes[speakerName])
  } else {
    response.json(quotes['unknown'])
  }
})

app.listen(PORT, () => {
  console.log(`The server is now running on port ${PORT}!`)
})
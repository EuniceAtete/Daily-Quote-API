const express = require('express');
const app = express();
const PORT = 5000;

const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "The key to success is to focus on goals, not obstacles.",
  "Don’t wait for opportunity. Create it.",
  "Little things make big days.",
  "Don’t be afraid to give up the good to go for the great.",
  "Opportunities don’t happen. You create them.",
  "It always seems impossible until it’s done.",
  "Start where you are. Use what you have. Do what you can.",
  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
  "Success usually comes to those who are too busy to be looking for it.",
  "Hard work beats talent when talent doesn’t work hard.",
  "The secret of getting ahead is getting started.",
  "Don’t wait. The time will never be just right.",
  "Great things are done by a series of small things brought together.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Push yourself, because no one else is going to do it for you.",
  "Believe you can and you’re halfway there.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Failure is the condiment that gives success its flavor.",
  "Motivation is what gets you started. Habit is what keeps you going.",
  "Your limitation—it’s only your imagination.",
  "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
  "The harder the battle, the sweeter the victory.",
  "Don’t count the days, make the days count.",
  "Do something today that your future self will thank you for.",
  "Little by little, a little becomes a lot.",
  "Don’t be afraid to give up the good to go for the great.",
  "Work hard in silence, let your success be your noise.",
  "Don’t wish it were easier. Wish you were better.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Success is walking from failure to failure with no loss of enthusiasm.",
  "The only place where success comes before work is in the dictionary.",
  "Action is the foundational key to all success.",
  "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  "Do what you can with all you have, wherever you are.",
  "The future depends on what you do today.",
  "Push yourself because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "Sometimes later becomes never. Do it now.",
  "Keep your eyes on the stars, and your feet on the ground."
];

app.use(express.json());

function getDailyQuote(){
    const today = new Date();
    const quoteIndex = today.getDate() % quotes.length;
    return quotes[quoteIndex];
}

app.get('/quotes',(req,res) => {
    res.json({quote: getDailyQuote()});
})
app.listen(PORT, () =>{
    console.log(`Listening to Motivational Quotes on port ${PORT}...`);
})
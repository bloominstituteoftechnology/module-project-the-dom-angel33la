const { quotes, people } = require("./data");

function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const elems = document.getElementsByTagName('div');

  for(let i = 0; i < elems.length; i++){
    elems[i].classList.add('widget');
  }

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  let widgets = document.querySelectorAll('.widget');
  let randomIndex = Math.floor(Math.random() * 10);
  let quotesE = quotes;
  let randomQuote = quotesE[randomIndex];
  let quoteDiv = document.createElement('div');
  quoteDiv.textContent = randomQuote.text;
  let authorDiv = document.createElement('div');
  authorDiv.textContent = randomQuote.author;
  widgets[0].appendChild(quoteDiv);
  widgets[0].appendChild(authorDiv);
  

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  let adverbIndex = Math.floor(Math.random() * adverbs.length);
  let nounIndex = Math.floor(Math.random() * nouns.length);
  let verbIndex = Math.floor(Math.random() * verbs.length);

  let sentence = 'We need to ' + verbs[verbIndex] + ' our ' + nouns[nounIndex] + ' ' + adverbs[adverbIndex] + ' in order to ' + verbs[verbIndex] + ' our ' + nouns[nounIndex] + ' ' + adverbs[adverbIndex] + '.';

  let para = document.createElement('p');
  para.textContent = sentence;

  widgets[1].appendChild(para);

  // 👉 TASK 4 - Build a "Countdown" widget
  document.addEventListener('DOMContentLoaded', function() {

    let seconds = 5000;
  
    // Create the countdown widget
    let countDownWidget = document.createElement('p');
    
    // Append the countdown widget to the third widget
    widgets[2].appendChild(countDownWidget);
  
    let interval = setInterval(function() {
      // Decrement seconds by 1000 each time the function runs
      seconds -= 1000;
  
      // Update the countDownWidget text based on the current value of seconds
      if (seconds === 4000) {
        countDownWidget.textContent = "T-minus 4...";
      } else if (seconds === 3000) {
        countDownWidget.textContent = "T-minus 3...";
      } else if (seconds === 2000) {
        countDownWidget.textContent = "T-minus 2...";
      } else if (seconds === 1000) {
        countDownWidget.textContent = "T-minus 1...";
      } else if (seconds === 0) {
        countDownWidget.textContent = "Liftoff! 🚀";
        clearInterval(interval); // Stop the interval when we reach 0
      }
  
    }, 1000); // Run the function every 1000 milliseconds (1 second)
  });

  // 👉 TASK 5 - Build a "Friends" widget
  let peopleIdx = Math.floor(Math.random() * 15);
  let peeps = peopleIdx;
  let peepsWidget = document.getElementsByClassName('friends');                   
  let peepsP = document.createElement('p');
  peepsP.textContent = peeps;
  widgets[3].appendChild(peepsP);
  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()

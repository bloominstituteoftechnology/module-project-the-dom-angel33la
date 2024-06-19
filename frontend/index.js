const { quotes, people } = require("./data");

function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const elems = document.querySelectorAll('div');
  for(let i = 0; i < elems.length; i++){
    elems[i].classList.add('widget');
  }
  let widgets = document.querySelectorAll('.widget');

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  let randomIndex = Math.floor(Math.random() * 10);
let randomQuote = quotes[randomIndex];

let quoteDiv = document.createElement('div');
quoteDiv.textContent = randomQuote.quote;

let authorDiv = document.createElement('div');
let authorText;

if (randomQuote.date === null) {
    authorText = `${randomQuote.author} in an unknown date`;
} else {
    authorText = `${randomQuote.author} in ${randomQuote.date}`;
}

authorDiv.textContent = authorText;

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
  let count = 5; // Initial counter value

  let countdownPara = document.createElement('p');
  countdownPara.textContent = `T-minus ${count}...`;
  widgets[2].appendChild(countdownPara);
  
  let countdownInterval = setInterval(() => {
      count--;
      if (count > 1) {
          countdownPara.textContent = `T-minus ${count}...`;
      } else if (count === 1) {
          countdownPara.textContent = `T-minus ${count}...`;
      } else {
          countdownPara.textContent = 'Liftoff! 🚀';
          clearInterval(countdownInterval);
      }
  }, 1000);

  // 👉 TASK 5 - Build a "Friends" widget
// Select a random person from the people array
let randomIdx = Math.floor(Math.random() * people.length);
let randomPerson = people[randomIdx];

//birth year from the dateOfBirth property
let birthYear = new Date(randomPerson.dateOfBirth).getFullYear();

// Construct the content based on the person's friends
let friendMsg;
if (randomPerson.friends.length > 0) {
    let friendNames = randomPerson.friends.map(friendId => {
        let friend = people.find(person => person.id === friendId);
        return `${friend.fname} ${friend.lname}`;
    });

    if (friendNames.length === 0) {
        friendMsg = `${randomPerson.fname} ${randomPerson.lname} was born in ${birthYear} and has no friends.`;
    } else if (friendNames.length === 1) {
        friendMsg = `${randomPerson.fname} ${randomPerson.lname} was born in ${birthYear} and is friends with ${friendNames[0]}.`;
    } else {
        let lastFriend = friendNames.pop();
        friendMsg = `${randomPerson.fname} ${randomPerson.lname} was born in ${birthYear} and is friends with ${friendNames.join(", ")} and ${lastFriend}.`;
    }
} else {
    friendMsg = `${randomPerson.fname} ${randomPerson.lname} was born in ${birthYear} and has no friends.`;
}

let friendsPara = document.createElement('p');
friendsPara.textContent = friendMsg;
widgets[3].appendChild(friendsPara);


  // 👉 TASK 6 - Make it so user can tab through the widgets
// Set the tabindex for each widget
widgets.forEach((widget, index) => {
    widget.setAttribute('tabindex', index + 1);
});

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()

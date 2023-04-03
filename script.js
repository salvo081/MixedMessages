const msg = [
    ['When you have a dream', 'Nothing is impossible', 'You make a choice', 'Success is not final'],  
    ['you\'ve got to grab it', 'you\'ve got to hold on tight', 'don\'t let other people write your script'],
    ['never let it go', 'do it', 'learn everything', 'to be successful', 'achieve all goals']
];

const getRandomNumber = (maxValue) => Math.floor(Math.random() * maxValue);

let randomMsg = '';

for (let i = 0; i<msg.length; i++) {
    randomMsg += msg[i][getRandomNumber(msg[i].length)];
    randomMsg += (i == 0) ? ', ' : (i == 1) ? ' and ' : '!';
}

console.log(randomMsg);
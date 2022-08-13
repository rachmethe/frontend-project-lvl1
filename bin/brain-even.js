import readlineSync from 'readline-sync';

const name = readlineSync.question('May I have your name? ');

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctness = true;

for (let i = 0; i < 3; i += 1) {
  const currentNumber = Math.floor(Math.random() * 100);
  console.log(`Question: ${currentNumber}`);
  const answer = readlineSync.question('Your answer: ');

  let correctAnswer = '';

  if (currentNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else if (currentNumber % 2 !== 0) {
    correctAnswer = 'no';
  }

  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
    correctness = false;
    break;
  } else if (answer === correctAnswer) {
    correctness = true;
    console.log('Correct!');
  }
}

if (correctness === true) {
  console.log(`Congratulations, ${name}!`);
}

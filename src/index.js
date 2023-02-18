import readlineSync from 'readline-sync';
import greeting from './cli.js';

function game(questions, rightAnswers, rules) {
  let score = 0;
  const name = greeting();
  console.log(rules);
  for (let i = 0; i < 3; i += 1) {
    const question = questions[i].join(' ');
    const rightAnswer = rightAnswers[i];

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('');

    if (answer === rightAnswer) {
      console.log('Correct!');
      score += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${rightAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (score === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
}

export default game;

const questions = Array.from({ length: 3 }, () => [Math.floor(Math.random() * 98 + 2)]);
const rightAnswers = [];
const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
for (let i = 0; i < 3; i += 1) {
  let flag = true;
  for (let j = 2; j <= Math.sqrt(questions[i]); j += 1) {
    if (questions[i] % j === 0) {
      flag = false;
      break;
    }
  }
  if (flag) {
    rightAnswers.push('yes');
  } else {
    rightAnswers.push('no');
  }
}

export { questions, rightAnswers, rules };

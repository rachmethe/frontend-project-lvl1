const questions = Array.from({ length: 3 }, () => [Math.floor(Math.random() * 100)]);
const answers = ['yes', 'no'];
const rightAnswers = [];
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
for (let i = 0; i < 3; i += 1) {
  rightAnswers.push(answers[questions[i] % 2]);
}
export { questions, rightAnswers, rules };

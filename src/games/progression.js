const questions = [];
const rightAnswers = [];
const rules = 'What number is missing in the progression?';
for (let i = 0; i < 3; i += 1) {
  const length = Math.floor(Math.random() * (10 - 5) + 5);
  const start = Math.floor(Math.random() * (50 - 1) + 1);
  const step = Math.floor(Math.random() * (15 - 3) + 3);
  const hideIndex = Math.floor(Math.random() * (length));
  const temp = [];
  for (let j = 1; j <= length; j += 1) {
    temp[j - 1] = start + step * j;
  }
  rightAnswers.push(String(temp[hideIndex]));
  temp[hideIndex] = '..';
  questions.push(temp);
}

export { questions, rightAnswers, rules };

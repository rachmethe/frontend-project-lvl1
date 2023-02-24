function findGcd(A, B) {
  let a = Math.abs(A);
  let b = Math.abs(B);
  while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }
  return a || b;
}
const questions = [];
const rightAnswers = [];
const rules = 'Find the greatest common divisor of given numbers.';

for (let i = 0; i < 3; i += 1) {
  const temp = [Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1];
  questions.push(temp);
}
for (let i = 0; i < 3; i += 1) {
  rightAnswers.push(String(findGcd(questions[i][0], questions[i][1])));
}
export { questions, rightAnswers, rules };

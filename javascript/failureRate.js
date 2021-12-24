function solution(N, stages) {
  const answer = [];
  let stageCount = 0;
  let failCount = 0;
  for (let i = 1; i <= N; i++) {
    stageCount = stages.length;
    stages = stages.filter((item) => {
      return item !== i;
    });
    failCount = stageCount - stages.length;
    answer.push([failCount / stageCount, i]);
  }
  const newAnswer = answer
    .sort((a, b) => b[0] - a[0])
    .map((item) => {
      return item[1];
    });
  return newAnswer;
}

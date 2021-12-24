function solution(numbers) {
  var answer = '';

  numbers
    .sort((a, b) => b.toString().repeat(4).slice(0, 4) - a.toString().repeat(4).slice(0, 4))
    .map((numberItem) => {
      answer = answer + numberItem.toString();
    });
  answer = answer.replace(/^0{1,}/gm, '0');
  return answer;
}

function solution(citations) {
  let answer = 0;
  for (let i = citations.length; i > 0; i--) {
    citations.map((citationItem) => {
      if (citationItem >= i) answer = answer + 1;
    });
    if (answer < i) {
      answer = 0;
    } else {
      answer = i;
      break;
    }
  }
  return answer;
}

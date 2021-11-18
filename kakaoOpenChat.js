function solution(record) {
  const userIdObject = {};
  const answer = [];
  let splitItem;

  record.map((recordItem) => {
    splitItem = recordItem.split(" ");
    if (splitItem[0] === "Enter" || splitItem[0] === "Change") {
      userIdObject[splitItem[1]] = splitItem[2];
    }
  });
  record.map((recordItem) => {
    splitItem = recordItem.split(" ");
    if (!(splitItem[0] === "Change")) {
      answer.push(
        `${userIdObject[splitItem[1]]}님이 ${
          splitItem[0] === "Enter" ? "들어왔" : "나갔"
        }습니다.`
      );
    }
  });
  return answer;
}

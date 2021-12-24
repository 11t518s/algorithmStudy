function solution(info, query) {
  const developerInfoObject = [];
  let checkedDeveloperInfoObject = [];
  const sortedQueryArray = [];
  let checkedItem = '';
  var answer = [];

  info.map((infoItem) => {
    developerInfoObject.push(infoItem.split(' '));
  });
  query.map((queryItem) => {
    sortedQueryArray.push(queryItem.split(' ').filter((item) => item !== 'and'));
  });
  sortedQueryArray.map((sortedQueryArrayItem) => {
    checkedDeveloperInfoObject = developerInfoObject;
    checkedItem = sortedQueryArrayItem.pop();
    checkedDeveloperInfoObject = checkedDeveloperInfoObject.filter((item) => {
      return Number(item[4]) >= Number(checkedItem);
    });
    for (let i = 0; i < 4; i++) {
      checkedItem = sortedQueryArrayItem.shift();
      if (checkedItem === '-') {
      } else {
        checkedDeveloperInfoObject = checkedDeveloperInfoObject.filter((item) => {
          return checkedItem === item[i];
        });
      }
    }

    answer.push(checkedDeveloperInfoObject.length);
  });
  return answer;
}

function solution(dartResult) {
  var answer = 0;
  let changedDartResult = dartResult
    .replace(/(\d{1})/gm, 'n$1')
    .replace(/(n1n0)/gm, 'n10')
    .replace(/S/gm, '**1')
    .replace(/D/gm, '**2')
    .replace(/T/gm, '**3')
    .replace(/^n/gm, '')
    .replace(/\#/gm, '*(-1)');
  let slicedDartResult = changedDartResult.split('n');
  console.log(slicedDartResult);

  if (slicedDartResult[0].slice(-1) === '*') {
    slicedDartResult[0] = slicedDartResult[0] + '2';
  }
  if (slicedDartResult[1].slice(-1) === '*') {
    slicedDartResult[1] = slicedDartResult[1] + '2';
    slicedDartResult[0] = slicedDartResult[0] + '*2';
  }
  if (slicedDartResult[2].slice(-1) === '*') {
    slicedDartResult[2] = slicedDartResult[2] + '2';
    slicedDartResult[1] = slicedDartResult[1] + '*2';
  }

  slicedDartResult.map((item) => {
    answer = answer + eval(item);
  });
  return answer;
}

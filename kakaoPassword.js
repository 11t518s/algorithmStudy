function solution(new_id) {
  let confirmedId = new_id
    .toLowerCase()
    .replace(/[^0-9|a-z|\-|\_|\.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^[\.]|[\.]$/g, '');
  if (!confirmedId) {
    confirmedId = 'a';
  }
  if (confirmedId.length >= 16) {
    confirmedId = confirmedId.slice(0, 15);
    confirmedId = confirmedId.replace(/^[\.]|[\.]$/g, '');
  }
  while (confirmedId.length <= 2) {
    confirmedId += confirmedId.slice(-1);
  }
  return confirmedId;
}

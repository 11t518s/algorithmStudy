function decryptPassword(s) {
  // Write your code here
  let changedS = s.replace(/([A-Z]{1})([a-z]{1})\*/gm, "$2$1");
  let changedSArray = [];
  for (var i in changedS) {
    if (Number(changedS[i])) {
      changedSArray.unshift(changedS[i]);
    } else {
      break;
    }
  }
  changedS = changedS.slice(changedSArray.length);
  for (let j = 0; j < changedSArray.length; j++) {
    changedS = changedS.replace(/0{1}/, changedSArray[j]);
  }
  return changedS;
}

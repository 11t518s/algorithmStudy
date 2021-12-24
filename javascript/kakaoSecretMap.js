function solution(n, arr1, arr2) {
    var answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(Number(arr1[i].toString(2)) + Number(arr2[i].toString(2)) + Number("1".repeat(n)))
    } 
    const changedAnswer = answer.map((answerItem) => {
        console.log(answerItem)
        return answerItem.toString().replace(/(2|3)/gm, "#").replace(/1/gm, " ")
    })
    return changedAnswer;
}
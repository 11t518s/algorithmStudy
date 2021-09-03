const test = document.getElementById('target');
// test.addEventListener("click", alert('asfd'))
// test.addEventListener("click", solution([1,2,3,4,5,6,7,8,9,0], "rigth"))

test.innerText = '일단 이거는 잘 되고'
const solution = () => {

    let answer = '';
    let positionOfLeft = [0,3];
    let positionOfRight = [2,3];
    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] === 1 || numbers[i] === 4 ||numbers[i] === 7) {
            answer = answer + "L";
            positionOfLeft = [numbers[i]%3,parseInt(numbers[i] / 3)]
        } else if (numbers[i] === 3 || numbers[i] ===6 || numbers[i] ===9) {
            answer = answer + "R";
            positionOfRight = [numbers[i]%3,parseInt(numbers[i] / 3)-1]
        } else {
            let givenNumber = [numbers[i]%3,parseInt(numbers[i] / 3)]
            if (Math.abs(givenNumber[0] - positionOfLeft[0] ) +Math.abs(givenNumber[1] - positionOfLeft[1] )  > Math.abs(givenNumber[0] - positionOfRight[0] ) + Math.abs(givenNumber[1] - positionOfRight[1] )) {
                answer = answer + "R";
                positionOfRight = givenNumber
            } else if (Math.abs(givenNumber[0] - positionOfLeft[0] ) +Math.abs(givenNumber[1] - positionOfLeft[1] )  > Math.abs(givenNumber[0] - positionOfRight[0] ) + Math.abs(givenNumber[1] - positionOfRight[1] )) {
                answer = answer + "L";
                positionOfLeft = givenNumber

            } else {
                answer = answer+ hand[0].toUpperCase()
            }

        }
    }

    return answer;
}
test.addEventListener('click', solution)

const test = document.getElementById('target');
// test.addEventListener("click", alert('asfd'))
// test.addEventListener("click", solution([1,2,3,4,5,6,7,8,9,0], "rigth"))

test.innerText = '일단 이거는 잘 되고'
const solution = () => {
const numbers = [1,2,3,4,5,6,7,8,9,0];
const hand = 'right'
    let answer = '';
    let positionOfLeft = 3;
    let positionOfRight = 3;
    for (let i = 0; i < numbers.length; i ++) {
        console.log(positionOfLeft)
        if (numbers[i] === 1 || numbers[i] === 4 ||numbers[i] === 7) {
            answer = answer + "L";
            positionOfLeft = parseInt(numbers[i] / 3)
        } else if (numbers[i] === 3 || numbers[i] ===6 || numbers[i] ===9) {
            answer = answer + "R";
            positionOfRight = parseInt(numbers[i] /3) -1
        } else {
            let givenNumber = numbers[i] / 3
            if (Math.abs(givenNumber - positionOfLeft )> Math.abs(givenNumber - positionOfRight)) {
                answer = answer + "R";
            } else if (Math.abs(givenNumber - positionOfLeft )< Math.abs(givenNumber - positionOfRight)) {
                answer = answer + "L";
            } else {
                answer = answer+ hand[0].toUpperCase()
            }

        }
    }
    console.log(positionOfLeft)
    console.log(answer)
    return answer;
}
test.addEventListener('click', solution)

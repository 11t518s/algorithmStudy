function solution(numbers, hand) {

    let answer = '';
    let positionOfLeft = [0,3];
    let positionOfRight = [2,3];
    for (let i = 0; i < numbers.length; i ++) {
        if (numbers[i] === 1 || numbers[i] === 4 ||numbers[i] === 7) {
            answer = answer + "L";
            positionOfLeft = [0,parseInt(numbers[i]/3) ];
        } else if (numbers[i] === 3 || numbers[i] ===6 || numbers[i] ===9) {
            answer = answer + "R";
            positionOfRight = [2,parseInt(numbers[i]/3) -1]
        } else if (numbers[i] === 0){
            let givenNumber = [1,3]
            if (Math.abs(givenNumber[0] - positionOfLeft[0] ) +Math.abs(givenNumber[1] - positionOfLeft[1] )  
                > Math.abs(givenNumber[0] - positionOfRight[0] ) + Math.abs(givenNumber[1] - positionOfRight[1] )) {
                answer = answer + "R";
                positionOfRight = givenNumber
            } else if (Math.abs(givenNumber[0] - positionOfLeft[0] ) +Math.abs(givenNumber[1] - positionOfLeft[1] )  
                       < Math.abs(givenNumber[0] - positionOfRight[0] ) + Math.abs(givenNumber[1] - positionOfRight[1] )) {
                answer = answer + "L";
                positionOfLeft = givenNumber
            } else {
                answer = answer+ hand[0].toUpperCase()
            }
        } else {
            let givenNumber = [1,parseInt(numbers[i]/3)]
          if (Math.abs(givenNumber[0] - positionOfLeft[0] ) +Math.abs(givenNumber[1] - positionOfLeft[1] )  
                > Math.abs(givenNumber[0] - positionOfRight[0] ) + Math.abs(givenNumber[1] - positionOfRight[1] )) {
                answer = answer + "R";
                positionOfRight = givenNumber
            } else if (Math.abs(givenNumber[0] - positionOfLeft[0] ) +Math.abs(givenNumber[1] - positionOfLeft[1] )  
                       < Math.abs(givenNumber[0] - positionOfRight[0] ) + Math.abs(givenNumber[1] - positionOfRight[1] )) {
                answer = answer + "L";
                positionOfLeft = givenNumber
            } else {
                answer = answer+ hand[0].toUpperCase()

                if (hand === 'right') {
                    positionOfRight = givenNumber
                } else {
                    positionOfLeft = givenNumber
                }
                
            }

        }
            console.log(positionOfLeft, positionOfRight)

    }
    return answer;
}
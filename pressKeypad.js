function solution(numbers, hand) {
    let answer = ''
    let leftHand = [3, 0]
    let rightHand = [3, 2]
    let centeredItem;
    
    numbers.map(item => { 
        if (item % 3 === 2 || item === 0) {
            if (item === 0) {
                centeredItem = [3,1]
            } else {
                centeredItem = [parseInt(item/3), 1]
            }
            let leftPath = Math.abs(centeredItem[0]-leftHand[0]) + Math.abs(centeredItem[1]-leftHand[1])
            let rightPath = Math.abs(centeredItem[0]-rightHand[0]) + Math.abs(centeredItem[1]-rightHand[1])
            if (leftPath === rightPath) {
                if (hand === 'right') {
                    answer = answer + 'R'
                    rightHand = centeredItem
                } else if (hand === 'left') {
                    answer = answer + 'L'
                    leftHand = centeredItem
                }
                
            } else if (leftPath < rightPath) {
                answer = answer + 'L'
                leftHand = centeredItem
            } else if (rightPath < leftPath) {
                answer = answer + 'R'
                rightHand = centeredItem
            }
                        
            
        } else if (item % 3 === 1) {
            answer = answer + 'L'
            leftHand = [parseInt(item/3), 0]
        } else {
            answer = answer + 'R'
            rightHand = [parseInt(item/3) -1, 2]
        } 
    })
    return answer
}

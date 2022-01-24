const arr1 = new Array()
const arr2 = [];
const arr3 = [1,2,3,4,5]
const arr4 = new Array(5)
const arr5 = new Array(5).fill(5)
const arr6 = Array.from(Array(5), (value, idx) => {
  return idx + 1
})

console.log(arr1, arr2, arr3, arr4, arr5, arr6)


const joinedArray = arr6.join(',')
console.log(joinedArray)

// 이건 기존 배열도 봐뀌는 사이드 이펙트가 있ㅁㄱ
const reversedArray = arr6.reverse()
console.log(reversedArray, arr6)

const mergedArray1 = arr3.concat(arr5)
const mergedArray2 = [...arr3, ...arr5]

console.log(mergedArray1, mergedArray2)


// 마지막 요소를 처리하는 방법
const arr = [1,2,3,4,5,6]

arr.push(7)
arr.push(7, 8)
console.log(arr)
arr.pop()
arr.pop()
console.log(arr.pop())
console.log(arr)


//맨 앞에 요소를 처리하는 방법

arr.shift()
arr.shift()
console.log(arr)

arr.unshift(2)
arr.unshift(1)
console.log(arr)

// 중간 자르기
// slice 사이드 이펙트 없음
console.log(arr.slice(2,4), arr)


// 중간 요소 삭제하기
// 이러면 사이드 이펙트 생김
console.log(arr.splice(2, 2))
console.log(arr)


// 배열만들기
for (let i = 0; i < 6; i++) {
  console.log(i)
}

// arr에 있는게 나옴
for (const item of arr) {
  console.log(item)
}
arr.map((i)=> {
  console.log(i)
})
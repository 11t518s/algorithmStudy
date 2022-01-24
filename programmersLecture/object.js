const obj = {}
const obj1 = new Object()
const obj2 = {}
const obj3 = {name: 'bongsu', newKey1: 'newValue1'}

obj['new1'] = 'new1'
obj.new2 = 'new2'

delete obj.new2
console.log(obj)

console.log('new1' in obj)
console.log('new2' in obj)

console.log(Object.keys(obj3))
console.log(Object.values(obj3))
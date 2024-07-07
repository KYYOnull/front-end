
const flag1 = true
console.log(flag1 && 'hello'); // hello
console.log(flag1 ? 'a' : 'b'); // a

const flag2 = false
console.log(flag2 && 'hello'); // false
console.log(flag2 ? 'a' : 'b'); // b

const arr1 = ['a', 'b', 'c']
const arr2 = arr1.map(it => {
    return it + 's'
})
console.log(arr1)
console.log(arr2)


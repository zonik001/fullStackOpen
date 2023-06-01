// 声明变量
const x = 1
let y = 5

console.log(x, y)   // 1, 5 
y += 10
console.log(x, y)   // 1, 15 
y = 'sometext'
console.log(x, y)   // 1, sometext 
// x = 4    //const 不能被赋值



// 数组
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each to own line
})
const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)

// 对象
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}
  
const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object1.name)         // Arto Hellas 
const fieldName = 'age'
console.log(object1[fieldName])    // 35 


// 函数

let x = 5
let y = 10

console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y)

console.log(x <= y)

const isValidNumber = x < 8 && y < 20
console.log(isValidNumber)

console.log('Bruce' + 'Wayne')

const isEven = 10%2 === 0 ? true : false

console.log(isEven)

console.log(2 + '2')
console.log('2' + '2')
console.log(2 + undefined)

console.log(parseFloat('2.5'))
console.log((500).toString())
console.log(Boolean(10))

const var1 = 10
const var2 = '10'

console.log(var1 == var2)
console.log(var1 === var2)

const var3 = 10

if(var3 > 0){
    console.log('Positive')
}
else if(var3 < 0){
    console.log('Negative')
}
else{
    console.log('Zero')
}

const color = 'red'

switch(color){
    case 'red':
        console.log('Red color')
        break
    case 'green':
        console.log('Green color')
        break
    default:
        console.log('Invalid color')
}


for(let i = 0; i < 5; i++){
    console.log(i)
}

let i = 0
while(i < 5){
    console.log(i)
    i++
}

i = 1
do{
    console.log(i)
    i++
}while(i < 5)


const arr = [1, 2, 3, 4, 5]

for(const i of arr){
    console.log(i)
}

function greet(){
    console.log('Hello')
}

greet()

function add(x, y){
    return x + y
}

add(1,2)

const arrowSum = (a,b) => a + b

console.log(arrowSum(1,2))




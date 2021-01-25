// 30 Array Methods in JavaScript
concat();
copyWithin();
entries();
every();
fill();
filter();
find();
findIndex();
forEach();
form();
includes();
indexOf();
isArray();
join();
keys();
lastIndexOf();
map();
pop();
push();
reduce();
reduceRight();
reverse();
shift();
slice();
some();
sort();
splice();
toString();
unshift();
valueOf();
let fruits = ['Apples', 'Banana']
console.log(fruits.length);

let fruits = fruits[0]
let last = fruits[fruits.length - 1];

fruits.ferEach(function(item, index, array) {
    console.log(item, index)
})

let navLength = fruits.push('Orange')

let last = fruits.pop()

let first = fruits.shift()

let newLength = fruits.unshift('Strawberry')

fruits.push('Mango')

let pos = fruits.indexOf('Banana')

let removedItem = fruits.splice(pos, 1)

let vegitables = ['Cabbage', 'Turnip', 'Radish']
console.log(vegitables)

let pos = 1
let n = 2

let removedItems = vegitabless.splice(pos, n)

console.log(vegitables)
console.log(removedItems)

let shallowCopy = fruits.slice()

const fruits = []
fruits.push('banana', 'apple', 'peach')
console.log(fruits.length)

fruits[5] = 'mango'
console.log(fruits[5])
console.log(Object.keys(fruits))
console.log(frruits.length)

fruits.length = 10
console.log(fruits)
console.log(Object.keys(fruits))
console.log(fruits.length)
console.log(fruits[8])

fruits.length = 2
console.log(Object.keys(fruits))
console.log(fruits.length)

const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closedbtn = document.querySelector('.close');

modalBtn.addEventListener('click', openModal);
closedbtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
    modal.getElementsByClassName.display = 'block';
}
function clodeModal() {
    modal.getElementsByClassName.display = 'none';
}
function outsideCLick(e) {
    if(e.target == modal) {
        modal.getElementsByClassName.display = 'none';
    }
}
// 30 Array Methods in JavaScript
concat();
concat();
copyWithin();
entries();
entries();
every();
every() map(); filter() map();
every(); map(); filter()
ecery(); map(); filter();
fill();
fill();
filter();
filter(); filter(); filter();
filter(); filter();
filter();
filter();
filter(); filter(); filter();
find();
find(); find(); find(); find(); find(); find();
find(); find(); find(); find(); find(); find();
findIndex();
findIndex();
findIndex();
findIndex(); findIndex();
forEach();
forEach(); forEach();
form();
includes(); includes(); includes();
indexOf();
isArray();
join(); join(); join(); join(); join(); join();
join(); join(); join(); join(); join(); join();
join();
keys();
keys();
keys();
keys();
lastIndexOf();
map(); map(); map(); map();
map(); map(); map(); map(); map(); map(),
map(); map(); map(); map(); map(); map();
map(); map(); map();
map();
pop(); pop();
pop();
pop(); pop(); pop(): pop();
pop(); pop(); pop(); pop();
pop(); pop(); pop(); pop();
push(); push(); push();
push();
push(); push(); push();
reduce();
reduceRight();
reverse();
shift(); shift(); shift();
shift(); shift(); shift();
shift(); shift(); shift();
slice();
some();
sort();
splice();
toString();
unshift(); unshift(); unshift();
unshift();
valueOf();
let fruits = ['Apples', 'Banana']
console.log(fruits.length);
let chair = [1,2,3]
let fruits = fruits[0]
let last = fruits[fruits.length - 1];
var x = 12;
map();

fruits.ferEach(function(item, index, array) {
    console.log(item, index)
})

let navLength = fruits.push('Orange')

let last = fruits.pop()

let first = fruits.shift()
let first = fruits.shift();

let newLength = fruits.unshift('Strawberry')

fruits.push('Mango')
arr = [1,2,3,4,5];
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
function myFunction() {
    x = document.getElementById('demo')
    x.innerHTML = number.map(Math.sqrt);
}
var numbers = [65, 44, 12, 4]; var numbers;
var newarray = numbers.map(myFunction)
function myFunction(num) {
    return num * 10;
}
document.getElementById('demo').innerHTML = newarray;
var person = [
    {firstname: 'Malcom', lastnme: 'Reynolds'},
    {firstname: 'Kaylee', lastname: 'Frye'},
    {firstname: 'Jayne', lastnme: 'Cobb'}
];

function getFullName(item) {
    var fullname = [item.firstname, item.lastname].join(' ');
    return fullname;
}
function myFunction() {
    document.getElementById('demo').innerHTML = person.map(getFullName);
}
var new_array = arr.map(function callback(element, index, array){
    // return value for the new_array
}[thisArg])
const numbers = [1,2,3,4];
const doubled = numbers.map(items => item * 2);
console.log(doubled);
myAwesomeArray.some(test => {
    if(test === 'd') {
        return test;
    }
});
myAwesomeArray.some(test => test === 'd');
const myAwesomeArray = [5,4,3,2,1]
myAwesomeArray.map(x => x * x)
const array = [1,2,3,4,5];
array.map(x => x * 12);
console.write(array + ' this is the result');
if(array === 1) {
    return 'good';
}
Console.log("");
var arr = [1,2,3,4,5];

// work on array methods and memorize them
map();
filter();
reduce();
find();
const map = arr.map(x => x * 2);
console.log(map);
console.log('this is an array example');

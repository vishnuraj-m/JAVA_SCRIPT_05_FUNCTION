// !Function

function print1() { //fun definition
    console.log('This is printed function');
}


let print = () => { //fat arrow function or unnamed fun
    console.log('This is printed function');
}

console.log('abcdef');
print1(); //fun call
print(); //fun call

// ! Function with argument

// let userEnterData = prompt('Enter a Number')

function print3(a = "Default value", number) {
    console.log(a);
    console.log(number);
}

print3("Hello");
print3("Non", 1);
// print3("Non", userEnterData);
print3();

function print4(a, b, c) {
    console.log(a);
    if (b) {
        console.log(b);
    }
    if (c) {
        console.log(c);
    }
}
print4('abc', 123, "3254");
print4('abc', 123);

function print5(a, b, c) {
    console.log(a);
    b && console.log(b);
    c && console.log(c);
}
print5('abc', 123, "3254");
print5('abc', 123);


// !fun return value

function addOne(a) {
    return a + 1
}

addOne(4);
let result = addOne(5);
console.log(result);


function addOne1(a) {
    console.log('print argument a: ', a);
    return a + 1;
    // !avoid codes after return
}
addOne1(4);
let result1 = addOne1(5);
console.log(result1);

// !array operations

let ourArray = [1, 2, 3, 4, 5];

// *push
ourArray.push(6);
console.log(ourArray);

// *unshift
ourArray.unshift(0);
console.log(ourArray);

// *pop
ourArray.pop();
console.log(ourArray);

// *shift
ourArray.shift();
console.log(ourArray);

// !update element in an array

ourArray.splice(2, 1);
console.log(ourArray);

ourArray.splice(2, 1, "abcd");
console.log(ourArray);

// !Foreach
let ourArray1 = [1, 2, 3, 4, 5]

ourArray1.forEach((current, index) => {
    console.log(current)
    ourArray1.splice(index, 1, current + 1)
});

console.log('Foreach:', ourArray1);

// !map
let ourArray2 = [1, 2, 3, 4, 5]

let newArray = ourArray2.map((current) => {
    return current + 1;
});

console.log('map: ', newArray);
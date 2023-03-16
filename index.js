// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
//destructivelyAppendCat
function destructivelyAppendCat(name) {
    return cats.push(name);
}

destructivelyAppendCat("Ralph");
cats.pop();
//
function destructivelyPrependCat(name) {
    return cats.unshift(name);
}
destructivelyPrependCat("Bob");
cats.shift();
////
let x = cats.slice(2);
function destructivelyRemoveLastCat() {
    return cats.pop();
}
destructivelyRemoveLastCat();
cats.push(x.at(0));
//
let y = cats.at(0);
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
destructivelyRemoveFirstCat();
cats.unshift(y);
//
function appendCat(name) {
    let newArray = [...cats, name]
    return newArray;
}
appendCat("Broom");
//
function prependCat(name) {
    let newArray = [name, ...cats];
    return newArray;
}
prependCat("Arnold");
//

function removeLastCat() {
    let newArray = [...cats];
    newArray.pop();
    return newArray;
}
removeLastCat();
//
function removeFirstCat() {
    let newArray = [...cats];
    newArray.shift();
    return newArray;
}
removeFirstCat();
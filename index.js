const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name)
    return cats
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const newArray = [...cats]
    newArray.push(name)
    return newArray
}
function prependCat(name) {
    const newArray = [...cats]
    newArray.unshift(name)
    return newArray
}
function removeLastCat() {
    const newArray = [...cats]
    newArray.pop()
    return newArray
}
function removeFirstCat() {
    const newArray = [...cats]
    newArray.shift()
    return newArray
}
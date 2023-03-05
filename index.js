//Implement your own version of the following array methods:
//map, filter, find, concat, push, pop, slice, splice, some, every, reverse.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 12, 23, 56]

/*
 MAP
*/
Array.prototype.myMap = function (cb) {
  const array = [...this]

  for (let i = 0; i < array.length; i++) {
    array[i] = cb(array[i], i, this)
  }

  return array
}
const myMap = array.myMap((num) => num + 1)
console.log("map:", myMap)
/*
 FILTER
*/
Array.prototype.myFilter = function (cb) {
  const filteredArray = []

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      filteredArray.push(this[i])
    }
  }

  return filteredArray
}
const myFilter = array.myFilter((num) => num > 10)
console.log("filter:", myFilter)
/*
 FIND
*/
Array.prototype.myFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return this[i]
    }
  }

  return undefined
}
const myFind = array.myFind((num) => num === 56)
console.log("find", myFind)
/*
 CONCAT
*/
Array.prototype.myConcat = function (...arrays) {
  const result = [...this]
  for (let i = 0; i < arrays.length; i++) {
    if (Array.isArray(arrays[i])) {
      result.push(...arrays[i])
    } else {
      result.push(arrays[i])
    }
  }
  return result
}
const myConcat = array.myConcat(array, array, [456, 347, 1], 900)
console.log("concat", myConcat)
/*
 PUSH
*/
Array.prototype.myPush = function (...items) {
  for (let i = 0; i < items.length; i++) {
    this[this.length] = items[i]
  }

  return this.length
}

const myPush = array.myPush(250, 900)
console.log("push", myPush)
/*
 POP
*/
Array.prototype.myPop = function () {
  if (this.length === 0) {
    return undefined
  }

  const poppedItem = this[this.length - 1]
  this.length--

  return poppedItem
}
const myPop = array.myPop()
console.log("pop", myPop)
/*
 SLICE
*/
Array.prototype.mySlice = function (startIndex, endIndex) {
  const slicedArray = []
  const start = startIndex === undefined ? 0 : startIndex < 0 ? this.length + startIndex : startIndex
  const end = endIndex === undefined ? this.length : endIndex < 0 ? this.length + endIndex : endIndex

  for (let i = start; i < end; i++) {
    slicedArray.push(this[i])
  }

  return slicedArray
}
const mySlice = array.mySlice(1, 5)
console.log("slice", mySlice)
/*
 SPLICE
*/
Array.prototype.mySplice = function (start, deleteCount, ...items) {
  const arrayLength = this.length
  const deletedItems = []

  start = start >= 0 ? start : Math.max(arrayLength + start, 0)
  deleteCount = deleteCount === undefined ? arrayLength - start : Math.min(Math.max(deleteCount, 0), arrayLength - start)

  for (let i = start; i < start + deleteCount; i++) {
    deletedItems.push(this[i])
  }

  const remainingItems = this.slice(0, start).concat(items, this.slice(start + deleteCount))

  this.length = 0
  for (let i = 0; i < remainingItems.length; i++) {
    this.push(remainingItems[i])
  }

  return deletedItems
}
const mySplice = array.mySplice(1, 2, -34, -56)
console.log("splice", mySplice)
/*
 SOME
*/
Array.prototype.mySome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      return true
    }
  }

  return false
}
const mySome = array.mySome((num) => num < 0)
console.log("some", mySome)
/*
 EVERY
*/
Array.prototype.myEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false
    }
  }

  return true
}
const myEvery = array.myEvery((num) => num % 2 === 1)
console.log("every", myEvery)
/*
 REVERSE
*/
Array.prototype.myReverse = function () {
  let left = 0
  let right = this.length - 1

  while (left < right) {
    const temp = this[left]
    this[left] = this[right]
    this[right] = temp
    left++
    right--
  }

  return this
}

const myReverse = array.myReverse()
console.log("reverse", myReverse)

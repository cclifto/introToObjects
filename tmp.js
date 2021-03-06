// NORMAL MODE ( 0 - 4 )


// Part 0 

// Write a function called flipColor. This function may be 
// used to change the color of a tile in a game. It should 
// take as input an object. If that object's color property
// has the value blue, it should change it to red, and 
// vice-versa.

var flipColor = function(inputObj) {
    if(inputObj.color === 'red') {
        inputObj.color = 'blue'
    }
    else {
        inputObj.color = 'red'
    }
    return inputObj
}


// see test.js for example usage


// Part 1

// Write a function called getFullNames that takes an array 
// of objects with first and last names and returns an array 
// of strings, where each string is a customer's full name.

// see test.js for example usage

var getFullNames = function(inputArr) {
    var fullNamesArr =[]
    for(var i = 0; i < inputArr.length; i++) {
        var firstName = inputArr[i].first
        var lastName = inputArr[i].last
        var fullName = firstName + ' ' + lastName
        fullNamesArr.push(fullName)
    }
    return fullNamesArr
}

// Part 2

// Write a function called generateDog that returns an object which represents a dog.
// The dog object should have attributes like legs, weight and color. The dog *constructor* 
// (which is, almost, what this is) should take a name input, and the dog should receive the 
// assigned name.

var generateDog = function(input){
    var newObject = {
        legs: 4,
        name: input,
        speak: function(input){
            input = input.replace(0, "r")
            for (var i = 0; i< input.length; i ++) {
                if (input[i] === " ") {
                input = input.replace(input[(i + 1)], "r")
                } 
            } 
            input = input.replace(input[0],"r")
            return input
        }
    }
   return newObject
}

// Give the dog a method called .speak(). speak() should receive a string as input and 
// return a new version of that string where the first letter of every word is replaced 
// with the letter 'r'.


// see test.js for example usage


// Part 3

// Write a function pluck() that, given a list of objects, extracts a list of
// the values associated with a given property name.

// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
// pluck(stooges, 'name') should yield the array, ['moe','larry','curly']

// see test.js for example usage

var pluck = function(array, key){
    var newObject = []
        for(var i = 0; i < array.length; i++){
       var nameObject = array[i]
             newObject.push(nameObject[key])   
        }
  return newObject
}

// Part 4

// Write a function called getCounts that takes a string of text as input and returns
// an object which stores the frequency of each word in the string.

// Note that your counts should NOT be case-sensitive.

var lowerCaseAll = function(string) {
    var splitString = string.split(' ')
    for(var i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toLowerCase() + splitString[i].substring(1)
        var allLower = splitString.join(' ')
    }
    return allLower
}

var getCounts = function(inputText) {
    var countObj = {}
    var lowerTextString = lowerCaseAll(inputText)
    var lowerTextArray = lowerTextString.split(' ')
    // log(lowerTextArray)
    for(var i = 0; i < lowerTextArray.length; i++) {
        if(countObj[lowerTextArray[i]] === undefined) {
            countObj[lowerTextArray[i]] = 1
        }
        else {
            countObj[lowerTextArray[i]] = countObj[lowerTextArray[i]] + 1
        }
    }
    return countObj
}


// check test.js for examples of how this function should be used.

// ADVENTURE MODE ( 5 - 8 )

// for these problems you will need to use the for-in loop


// Part 5

// Write a function called reverseObject(). It should take as input an object, 
// and it should output a new object where the keys and values are reversed.


// var object = {
//     occupants: 4,
//     apartment_no: "2b",
//     structural_integrity: "failing"
// }
// reverseObject(object) should yield: 
// {
//   4: 'occupants',
//   2b: 'apartment_no',
//   failing: 'structural_integrity'
// }

var reverseObject = function(inputObj) {
    var reversedObj = {}
    for(var key in inputObj) {
        reversedObj[inputObj[key]] = key
    }
    return reversedObj
}

// Part 6

// Write a function called reverseAll(). It should take as input an array of 
// objects, and it should output an array of objects with the keys and values
// reversed.

var users = [{obama: 'president@gmail.com',hobby: 'basketball'},{trump: 'americamoneywin@yahoo.com', hobby:'dealmaking'},{bush: 'jeb!@hotmail.com',hobby:'portraiture'}]
// should yield: [{'president@gmail.com': 'obama',basketball: 'hobby'}, ....]

var reverseAll = function(inputArray) {
    var flippedArray = []
    for(var i = 0; i < inputArray.length; i++) {
        var reversedObj = {}
        var object = inputArray[i]
        for(var key in object) {
            reversedObj[object[key]] = key
        }
        flippedArray.push(reversedObj)
    }
    return flippedArray
}

// Part 7

// Write a function where() that takes two inputs, a list of objects and 
// a properties object. It should return a new list containing only those
// objects that meet the key-value conditions in the properties object.

var plays = [
    {title: "Cymbeline", author: "Shakespeare", year: 1623},
    {title: "The Tempest", author: "Shakespeare", year: 1623},
    {title: "Hamlet", author: "Shakespeare", year: 1603},
    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
    {title: "Macbeth", author: "Shakespeare", year: 1620},
    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
]



console.log('********************************************************************************************************************************************')
console.log('')
console.log('Test Results Below')
console.log('__________________')

var chai = require('chai'),
	expect = chai.expect
	should = chai.should
	assert = chai.assert

function checkFuncBasics(name,argNum) {
	try {
		var func = eval(name)
	}
	catch(e) {
		assert.equal(undefined,name,'Make sure your function is called ' + name + ', case-sensitive.')
	}
	if (argNum) assert.equal(func.length,argNum,'Your function should take ' + argNum + ' argument(s) (that means inputs). Does it?')
}

describe('flipColor()', function(){
	it("should return an object", function() {
		expect(flipColor({color:'blue'})).to.be.a('object')
	})

	it("should take as input an object. If that object's color property has the value blue, it should change it to red, and vice-versa", function(){
		checkFuncBasics('flipColor',1)
		var tile = {
		    width: "200px",
		    height: "200px",
		    background: "black",
		    color: "blue"
		}
		var tile2 = flipColor(tile)
		expect(tile2.color).to.equal("red")
		assert.equal("blue", flipColor(tile2).color)
	})
})

describe('getFullNames()', function(){
	it('should return an array', function() {
		var customers = [
		    { first: 'Joe', last: 'Blogs'},
		    { first: 'John', last: 'Smith'},
		    { first: 'Dave', last: 'Jones'},
		    { first: 'Jack', last: 'White'}
		]
		expect(getFullNames(customers)).to.be.a('array')
	})
	it("should takes an array of objects with first and last names and returns an array of strings, where each string is a customer's full name", function() {
		checkFuncBasics('getFullNames',1)
		var customers = [
		    { first: 'Joe', last: 'Blogs'},
		    { first: 'John', last: 'Smith'},
		    { first: 'Dave', last: 'Jones'},
		    { first: 'Jack', last: 'White'}
		]
		assert.equal("John Smith", getFullNames(customers)[1])
	})
})

describe('generateDog()', function(){
	it('returns an object which represents a dog. The dog object should have attributes like legs, weight and color. The dog *constructor* (which is, almost, what this is) should take a name input, and the dog should receive the assigned name.', function(){
		checkFuncBasics('generateDog',1)
		var dog = generateDog('rex')
		expect(dog.legs).to.equal(4)
		expect(dog.name).to.equal("rex")
		var dog = generateDog('carl')
		expect(dog.name).to.equal('carl')
	})
	it('speak() should receive a string as input and return a new version of that string where the first letter of every word is replaced with the letter "r".', function(){
		var dog = generateDog('carl')
		assert.equal("r rove rou", dog.speak('i love you'))
	})
})

describe('pluck()', function(){
	it('should return an array', function() {
		var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
		expect(pluck(stooges,'name')).to.have.lengthOf(3)
	})
	it('should, given a list of objects, extracts a list of the values associated with a given property name', function(){
		checkFuncBasics('pluck',2)
		var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}]
		assert.equal("moe", pluck(stooges, 'name')[0])
		assert.equal(60, pluck(stooges, 'age')[2])
	})
})
describe('getCounts()', function(){
			var text = "It’s obviously not the case, but T’Challa—the Black Panther and mythical ruler\
	 of Wakanda—has always struck as the product of the black nationalist dream, a walking\
	  revocation of white supremacist myth. T’Challa isn’t just a superhero in the physical\
	   sense, he is one of the smartest people in the world, ruling the most advanced civilization\
	    on the planet. Wakanda’s status as ever-independent seems to eerily parallel Ethiopia’s\
	     history as well as its place in the broader black imagination. Maybe it’s only me, but I\
	      can’t read Jason Aaron’s superb “See Wakanda And Die” and not think of Adowa.\
	Comic book creators, like all story-tellers, get great mileage out of myth and history. But\
	 given the society we live in, some people’s myths are privileged over others. Some of that is\
	  changing, no doubt. In the more recent incarnations of T’Challa you can see Christopher Priest\
	   invoking the language of the Hausa or Reginald Hudlin employing the legacy of colonialism.\
	    These were shrewd artistic decisions, rooted in the fact that anyone writing Black Panther\
	     enjoys an immediate, if paradoxical, advantage: the black diaspora is terra incognita for\
	      much of the world. What does the broader world really know of Adowa? Of Nanny and Cudjoe?\
	       Of the Maji-Maji rebellion? Of Legba and Oshun?  Of Shine? Of High John The Conqueror?\
	        T’Challa’s writers have always enjoyed access to a rich and under-utilized pool of allusion\
			and invocation."

	it('should return an object', function() {
		var wordFrequencyObject = getCounts(text)
		expect(wordFrequencyObject).to.be.a('object')
	})

	it('takes a string of text as input and returns an object which stores the frequency of each word in the string.', function(){
		checkFuncBasics('getCounts',1)
		var wordFrequencyObject = getCounts(text)
		expect(wordFrequencyObject['but']).to.equal(3)
		expect(wordFrequencyObject['black']).to.equal(5)

	})
})

describe('reverseObject()', function(){
	it('should take as input an object, and it should output a new object where the keys and values are reversed.', function(){
		checkFuncBasics('reverseObject',1)
		var object = {
		    occupants: 4,
		    apartment_no: "2b",
		    structural_integrity: "failing"
		}
		var reversed = reverseObject(object)
		expect(reversed['2b']).to.equal('apartment_no')
	})
})

describe('reverseAll()', function(){
	it('should take as input an array of objects, and it should output an array of objects with the keys and values reversed.', function(){
		checkFuncBasics('reverseAll',1)
		var users = [{obama: 'president@gmail.com',hobby: 'basketball'},{trump: 'americamoneywin@yahoo.com', hobby:'dealmaking'},{bush: 'jeb!@hotmail.com',hobby:'portraiture'}]
		var flippedUsers = reverseAll(users)
		expect(flippedUsers[0]['president@gmail.com']).to.equal('obama')


	})
})

describe('where()', function(){
	var plays = [
	    {title: "Cymbeline", author: "Shakespeare", year: 1623},
	    {title: "The Tempest", author: "Shakespeare", year: 1623},
	    {title: "Hamlet", author: "Shakespeare", year: 1603},
	    {title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600},
	    {title: "Macbeth", author: "Shakespeare", year: 1620},
	    {title: "Death of a Salesman", author: "Arthur Miller", year: 1949},
	    {title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949}
	]

	it('should return an array', function() {
		expect(where(plays, {year: 1632})).to.be.a('array')
	})

	it('should return a new array containing only objects that meet the key-value conditions in the properties object', function(){
		checkFuncBasics('where',2)
		var sh8spr = where(plays, {author: "Shakespeare"})
		expect(sh8spr).to.have.lengthOf(5)
		
		var testPlays = where(plays, {author: "Shakespeare", year: 1611})
		expect(testPlays).to.have.lengthOf(0)

		var testPlays2 = where(plays, {author: "Shakespeare", year: 1623})
		expect(testPlays2).to.have.lengthOf(2)

		var firstPlay = testPlays2[0]
		expect(firstPlay.title).to.equal('Cymbeline')
	})
})


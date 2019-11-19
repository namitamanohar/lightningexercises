const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"
const sentence =`Hi. My name is ${name}, and I'm ${age} years old. They say that makes me a ${generationStereotype}. In ${timeSpan} years I'll be ${futureAge}! I guess that means I'll be a ${dadJoke} then. Ha ha`
console.log(sentence)

const foodArray = ["pizza", "anchovies", "burgers", "artichokes", "muffins", "french fries", "apples", "tamales", "curry", "tomatoes", "corn", "tamarind"]

const myFavoriteFoods = (array) =>{
  let newArray = []
  for (let index=0; index<array.length; index++){
    const element = array[index]; 
    if (element.startsWith("a")|| element.startsWith("t")){
      newArray.push(element)
    }
  }
  return newArray
}
console.log(myFavoriteFoods(foodArray))

const words = [
  "The", "killing", "complex", "houses",
  "married", "kittens", "and", "single",
  "soldiers", "and", "their", "kleptomaniacal",
  "families"
]

/*
  Function to filter out `k` words
  (Google 'javascript startswith' to get started)
*/
const kwords = () =>{
  let newArray =[]
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.startsWith("k")){
      newArray.push
    }
  }
}
/*
  Function to build a single string from the array
  (Google 'javascript combine all items in array' to get started)
*/


/*
  Invoke the filtering function and store its return value
*/


/*
  Invoke the string building function, and pass the
  return value of the previous function as an argument
*/


console.log()
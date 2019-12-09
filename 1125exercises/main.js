// loop though the numbers in the 'listOfNumbers' array (using a for.. of loop)
// write a conditional statement that checks whether the number is even or odd
// if it is even print "2 is even" (plug in the current #)
// if it is odd print "3 is even" (plug in the current #)
let listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const number of listOfNumbers){
  const remainder =number%2
  if(remainder==0){
    console.log(`${number} is even`)
  }else if(remainder==1){
    console.log(`${number} is odd`)
  }
}
// three equal sign check the data type as well 

//Declare three variables (eyeColor, hairColor, height). If eyeColor is blue and hairColor is red and height is 6ft, console log the string template `red hair, blue eyes, and 6ft tall, otherwise console log "not a match"

const eyeColor= 'blue'
const hairColor='red'
const height='6ft'
if (eyeColor==='blue' && hairColor=='red' && height=='6ft') {
  console.log(`${hairColor} hair, ${eyeColor} eyes, and ${height} tall`)
} else {
  console.log(`not a match`)
}
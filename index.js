// Code your solutions in this file
function writeCards(names) {
  x = []
  for (let i = 0; i <= names.length; i++){
   x[i] = 'Thank you, ${names[i]}, for the wonderful surprise gift!'
   console.log ('Thank you, ${names[i]}, for the wonderful surprise gift!')
  }
  return x
}
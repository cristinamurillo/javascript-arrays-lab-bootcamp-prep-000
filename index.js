// Add your functions and code here
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}
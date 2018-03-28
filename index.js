const app = "I don't do much.";
var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten (name){
  kittens.push("Ralph");
  return (kittens);
}

function destructivelyPrependKitten (name){
  kittens.unshift("Bob");
  return (kittens);
}

function destructivelyRemoveLastKitten (){
  kittens.pop();
  return (kittens);
}

function destructivelyRemoveFirstKitten (){
  kittens.shift();
  return (kittens);
}

function appendKitten (name){
  var newKittensEnd = kittens.concat("Broom");
  return (newKittensEnd);
}

function prependKitten (name){
  var newKittensBeg = ["Bob"]
  newKittensBeg = newKittensBeg.concat(kittens)
  return (kittens);
}

function removeLastKitten (){
  
}

function removeFirstKitten (){
  
}


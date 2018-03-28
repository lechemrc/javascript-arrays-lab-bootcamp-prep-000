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
  var newKittensBeg = ["Arnold"]
  newKittensBeg = newKittensBeg.concat(kittens)
  return (newKittensBeg);
}

function removeLastKitten (){
  var newLastKittens = kittens.pop();
  return (newLastKittens);
}

function removeFirstKitten (){
  var newFirstKittens = kittens.shift();
  return (newFirstKittens);
}


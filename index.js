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
  //var newKittens= kittens
  var newKittens = kittens.concat("Broom");
  return (newKittens);
}

function prependKitten (name){
  kittens.push("Ralph");
  return (kittens);
}

function removeLastKitten (){
  
}

function removeFirstKitten (){
  
}


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



function removeLastKitten (){
  
}

function removeFirstKitten (){
  
}


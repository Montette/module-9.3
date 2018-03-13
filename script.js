var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";

var dinosaur = "triceratops".toUpperCase();


var newText = text.replace(text.split(" ")[0],dinosaur);

console.log(newText.slice(0,newText.length/2));
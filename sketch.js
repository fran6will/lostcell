var json;
function preload() {

  
  json = loadStrings('data/cell.json');
}

var generator;
var sel;


function setup() {
  noCanvas();
  // The Markov Generator
  // First argument is N-gram length, second argument is max length of generated text
    
  
  
    
    
  
  
   var elt = document.getElementById('myContainer');
 
    
    
    
    
    
     var ligneh = createDiv("");
    ligneh.parent(elt);
    ligneh.class("row center-block");
    ligneh.style("border", "solid 1px");
    ligneh.style("border-radius", "3px");
    ligneh.style("border-color", "#e5e5e5");
    ligneh.style("padding", "15px");
    ligneh.style("margin-bottom", "10px");
     ligneh.style("max-width", "500px");
    

    var logofb = createImg('fb.png');
    logofb.parent(ligneh);
    logofb.style("float", "right");
    

    var img = createImg('https://statusclone.com/theme/images/blank.png');
    
    img.parent(ligneh);
   img.style("float", "left");
    img.style("height", "40px");
    img.style("width", "40px");
    img.style("margin-right", "10px");
    
    
    
    var nom = createElement("h4","Robot triste");
    nom.style("font-weight","bold");
    nom.style("font-size", "14px");
    nom.style("line-height","18px");
    nom.style("margin-top","0px");
    nom.style("margin-bottom","0px");
    nom.style("letter-spacing", ".15px");
    
    nom.parent(ligneh)
    
    var date = createElement("h6","Il y a 1 minute");
    date.style("line-height","16px");
    date.style("margin-top","0px");
    date.style("color","#90949c");
   date.parent(ligneh);
    
    


    var test = createP("J'ai perdu mon cell maudine...")
    test.id("pipi")
    test.parent(ligneh);
    test.style("margin-top", "17px");
test.style("text-align","left");
    test.style("font-size", "24px");
    test.style("line-height", "28px");
    test.style("font-weight", "300");
    
var button = select('#gen');
  button.mousePressed(restore);


  
    
    
}

function restore() {
    
     var test = document.getElementById('pipi');
    var grammar = new RiGrammar(json.join('\n'));
    text = grammar.expand();
test.innerHTML =(text);
    





  
  

  
 
}

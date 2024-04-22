$(document).ready(function(){

function paraTres(){

var allArrays = [['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)']];

 function allPossibleCases(arr) {
  if (arr.length === 0) {
    return [];
  } 
else if (arr.length ===1){
return arr[0];
}
else {
    var result = [];
    var allCasesOfRest = allPossibleCases(arr.slice(1));  // recur with the rest of array
    for (var c in allCasesOfRest) {
      for (var i = 0; i < arr[0].length; i++) {
        result.push(arr[0][i] + allCasesOfRest[c]);
      }
    }
    return result;
  }

}
var r=allPossibleCases(allArrays);
var arrayTres = r;
var letter = (arrayTres[0] + "," + arrayTres[3] + "," + arrayTres[5] + "," + arrayTres[6] + " para > \n");
var letter1 = (arrayTres[1] + "," + arrayTres[2] + "," + arrayTres[4] + "," + arrayTres[7] + " para <");
var letters = letter + " // " +  letter1;

var caja = document.createElement('div');
    var texto = document.createTextNode(letters);
    caja.appendChild(texto);
    caja.setAttribute('class', 'caja');
    var contenedorPadre = document.getElementById('contenedor');
    contenedorPadre.appendChild(caja);

}

$( ".numeroTres" ).click(function() {
  paraTres();
});


});

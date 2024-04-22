$(document).ready(function(){

/*paraCuatro*/

function paraCuatro(){

var allArrays = [['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)']];

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

var arrayCuatro = r;
var letter = (arrayCuatro[0] + "," + arrayCuatro[3] + "," + arrayCuatro[5] + "," + arrayCuatro[6] + "," + arrayCuatro[9] + "," + arrayCuatro[10] + "," + arrayCuatro[12] + "," + arrayCuatro[15] + " para > \n");
var letter1 = (arrayCuatro[1] + "," + arrayCuatro[2] + "," + arrayCuatro[4] + "," + arrayCuatro[7] + "," + arrayCuatro[8] + "," + arrayCuatro[11] + "," + arrayCuatro[11] + "," + arrayCuatro[13] + "," + arrayCuatro[14] + " para <");
var letters = letter + " // " +  letter1;

var caja = document.createElement('div');
    var texto = document.createTextNode(letters);
    caja.appendChild(texto);
    caja.setAttribute('class', 'caja');
    var contenedorPadre = document.getElementById('contenedor');
    contenedorPadre.appendChild(caja);

}


$( ".numeroCuatro" ).click(function() {
  paraCuatro();
});

});

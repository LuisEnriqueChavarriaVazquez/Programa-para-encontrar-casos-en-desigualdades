$(document).ready(function(){

/*paraCuatro*/

function paraUno(){

var allArrays = [['(+)', '(-)']];

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
var r2=allPossibleCases(allArrays);

var arrayDos = r2;
var letter = (arrayDos[0] + " para > // \n" + arrayDos[1] + " para < ");

    var caja = document.createElement('div');
    var texto = document.createTextNode(letter);
    caja.appendChild(texto);
    caja.setAttribute('class', 'cajaverde');
    var contenedorPadre = document.getElementById('contenedor');
    contenedorPadre.appendChild(caja);

}


$( ".numeroUno" ).click(function() {
  paraUno();
});

});

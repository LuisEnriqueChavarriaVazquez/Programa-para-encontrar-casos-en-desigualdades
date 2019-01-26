$(document).ready(function(){

/*para cinco*/

function paraCinco(){

var allArrays = [['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)']];

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
var arrayCinco = r;
var letter = (arrayCinco[0] + "," + arrayCinco[3] + "," + arrayCinco[5] + "," + arrayCinco[6] + "," + arrayCinco[9] + "," + arrayCinco[10] + "," + arrayCinco[12] + "," + arrayCinco[15] + "," + arrayCinco[17] + "," + arrayCinco[18] + "," + arrayCinco[20] + "," + arrayCinco[23] + "," + arrayCinco[24] + "," + arrayCinco[27] + "," + arrayCinco[29] + "," + arrayCinco[30] + " para > \n");
var letter1 = (arrayCinco[1] + "," + arrayCinco[2] + "," + arrayCinco[4] + "," + arrayCinco[7] + "," + arrayCinco[8] + "," + arrayCinco[11] + "," + arrayCinco[11] + "," + arrayCinco[13] + "," + arrayCinco[14] + "," + arrayCinco[16] + "," + arrayCinco[19] + "," + arrayCinco[21] + "," + arrayCinco[22] + "," + arrayCinco[25] + "," + arrayCinco[26] + "," + arrayCinco[28] + "," + arrayCinco[31] + " para <");
var letters = letter + " // " +  letter1;

var caja = document.createElement('div');
    var texto = document.createTextNode(letters);
    caja.appendChild(texto);
    caja.setAttribute('class', 'caja');
    var contenedorPadre = document.getElementById('contenedor');
    contenedorPadre.appendChild(caja);
}



$( ".numeroCinco" ).click(function() {
  paraCinco();
});

});

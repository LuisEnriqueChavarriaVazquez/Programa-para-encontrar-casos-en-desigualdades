$(document).ready(function(){

/*para seis*/

function paraNueve(){

var allArrays = [['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)'], ['(+)', '(-)']];

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

r[256] = " para > //";
r[1] = r[15];
r[2] = r[5];
r[2] = r[125];
  var paras = " para < ";
   var valorFinal = " " + r.length/2 + " Combinaciones en total para cada caso (<)(>).";
  r.push(paras);
  r.push(valorFinal);

var arrayCinco = r;
var letter = (arrayCinco[0] + "," + arrayCinco[3] + "," + arrayCinco[5] + "," + arrayCinco[6] + "," + arrayCinco[9] + "," + arrayCinco[10] + "," + arrayCinco[12] + "," + arrayCinco[15] + "," + arrayCinco[17] + "," + arrayCinco[18] + "," + arrayCinco[20] + "," + arrayCinco[23] + "," + arrayCinco[24] + "," + arrayCinco[27] + "," + arrayCinco[29] + "," + arrayCinco[30] + "," + arrayCinco[32] + "," + arrayCinco[33] + "," + arrayCinco[34] + "," + arrayCinco[36] + "," + arrayCinco[39] + "," + arrayCinco[40] + "," + arrayCinco[43] + "," + arrayCinco[45]  + "," + arrayCinco[46] + "," + arrayCinco[48] + "," + arrayCinco[51] + "," + arrayCinco[53] + "," + arrayCinco[54] + "," + arrayCinco[57] + "," + arrayCinco[58] + "," + arrayCinco[60] + "," + arrayCinco[63] + " para > \n");
var letter1 = (arrayCinco[1] + "," + arrayCinco[2] + "," + arrayCinco[4] + "," + arrayCinco[7] + "," + arrayCinco[8] + "," + arrayCinco[11] + "," + arrayCinco[13] + "," + arrayCinco[14] + "," + arrayCinco[16] + "," + arrayCinco[19] + "," + arrayCinco[21] + "," + arrayCinco[22] + "," + arrayCinco[25] + "," + arrayCinco[26] + "," + arrayCinco[28] + "," + arrayCinco[31] + "," + arrayCinco[35] + "," + arrayCinco[37] + "," + arrayCinco[38] + "," + arrayCinco[41] + "," + arrayCinco[42] + "," + arrayCinco[44] + "," + arrayCinco[47] + "," + arrayCinco[49] + "," + arrayCinco[50] + "," + arrayCinco[52] + "," + arrayCinco[55] + "," + arrayCinco[56] + "," + arrayCinco[59] + "," + arrayCinco[61] + "," + arrayCinco[62] + " para <");
var letters = letter + " // " +  letter1;

var caja = document.createElement('div');
    var texto = document.createTextNode(r);
    caja.appendChild(texto);
    caja.setAttribute('class', 'caja');
    var contenedorPadre = document.getElementById('contenedor');
    contenedorPadre.appendChild(caja);

}

$( ".numeroNueve" ).click(function() {
  paraNueve();
});

});

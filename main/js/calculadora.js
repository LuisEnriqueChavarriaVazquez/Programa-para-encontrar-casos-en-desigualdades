$(document).ready(function(){

/*para seis*/

function paraDiez(){

var allArrays = [['+ ', '- '], ['+ ', '- '], ['+ ', '- '], ['+ ', '- '], ['+ ', '- '], ['+ ', '- '], ['+ ', '- '], ['+ ', '- '], ['+ ', '- '], ['+ ', '- ']];

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
document.write(r + '<br>');
}

$( ".numeroDiez" ).click(function() {
  paraDiez();
});

});

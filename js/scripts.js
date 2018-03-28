// Business Logic
function PigLatinT(str){
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var strarr = str.split("");
  var index;
  var str;
  for(var i = 0; i < strarr.length; i++){
    for(var j = 0; j < vowels.length; j++){
      if(strarr[i] === vowels[j]){
        if(index === undefined){
          index = strarr.indexOf(strarr[i]);
        }
      }
    }
  }
  if(index != 0){
    var sliced = str.slice(0, index);
    str = str.slice(index) + sliced + "ay";
  }else{
    str = str + "way";
  }
$(".Resulting").text(str);
  }


// User Logic
$(document).ready(function(){
  $("#PigLatin").submit(function(event){
    event.preventDefault();
    var userInput = $("#Piglatin").val();
    var userResult = PigLatinT(userInput);
    $("#Input").show();
  });
});

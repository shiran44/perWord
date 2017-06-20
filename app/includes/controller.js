
function showTranslate(str) {
  var xhttp;    
  if (str == "") {
    document.getElementById("tranlateW").innerHTML = "";
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("tranlateW").innerHTML=JSON.parse(this.responseText);
    }
  };
  xhttp.open("GET", "https://perwordproject.herokuapp.com/getWordTranslate/"+str, true);
  xhttp.send();
}

var words = [ "peer", "ambience", "phenomenal", "pathetic", "systematic"];

function showOptions() {
  var httpR;  
  var word = words[Math.floor(Math.random() * words.length)];
  document.getElementById("showWord").innerHTML= word;

  httpR = new XMLHttpRequest();
  httpR.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
      document.getElementById("1").innerHTML=obj[0];
      document.getElementById("2").innerHTML=obj[1];
      document.getElementById("3").innerHTML=obj[2];
      document.getElementById("4").innerHTML=obj[3];
    }
  };
  httpR.open("GET", "https://perwordproject.herokuapp.com/getWordTrivia/"+word, true);
  httpR.send();
}

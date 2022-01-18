var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event)  {
    console.log(event);

    var Content = event.results[0][0].transcript;
   

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
}

function speak(){ 
    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}

 
 
recognition.onresult = function(event) {

 console.log(event); 
var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="I am stupid")
      {
        console.log("get trolled");
        speak();
        window.location = "Level2.html";
      }
}

function yay() {
    window.location = "Level2.html"
}





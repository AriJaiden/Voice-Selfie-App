var SpeechRecognition=window.webkitSpeechRecognition;
rec=new SpeechRecognition();
function start(){
    document.getElementById("output").innerHTML="";
    rec.start();
}
rec.onresult=function(event){console.log(event);
context=event.results[0][0].transcript;
console.log(context);
document.getElementById("output").innerHTML=context;
if (context == "Take my selfie."){
    console.log("Working..");
    speak();
}
}
function speak(){
var synth= window.speechSynthesis;
var speakstuff= "taking selfie now";
var utterThis= new SpeechSynthesisUtterance(speakstuff);
synth.speak(utterThis);
console.log("It works");
Webcam.attach(camera);
setTimeout(function(){
    take_snapshot();
    save();
},10000);
}
Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 100
});
var camera= document.getElementById("camera");
console.log("this work");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie").innerHTML='<img id="me" src="'+data_uri+'">';
    })

}
function save(){
    var pic=document.getElementById("me").src
    var link=document.getElementById("aa");
    link.href=pic;
    link.click();
}

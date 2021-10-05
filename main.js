Webcam.set({
    width:350,
    height:350,
    image_format:"jpg",
    jpg_quality:90
});


camera= document.getElementById("camera");
Webcam.attach(camera);


function buttonCheck(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML= "<img id='img_thing' src="+data_uri+">";
});

}

console.log('ml5 version',ml5.version);

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/F266HPCrS/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded !");
}
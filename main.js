function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.hide();
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/D7fFTQ49u/model.json',modleLoaded)
}

function draw(){
image(video, 20, 20, 300, 300);
classifier.classify(video, gotResult);
}

function modleLoaded(){
    console.log('Model Loaded!');
}

function gotResult(error, results){
    console.log("hi");
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
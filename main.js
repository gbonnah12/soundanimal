//https://teachablemachine.withgoogle.com/models/m10Y-LwQz/
function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/m10Y-LwQz/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function start() 
{ 
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-N6O_KkFh/', modelReady);
}
function modelReady() 
{ 
    classifier.classify(gotResults);
}
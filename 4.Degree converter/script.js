function convertToCelcius(){
    F = parseFloat(inputFahrenheit.value);
    document.getElementById("outputCelcius").innerHTML = (F - 32)/1.8;
}
function convertToFahrenheit(){
    C = parseFloat(inputCelcius.value);
    document.getElementById("outputFahrenheit").innerHTML = (C * 1.8) + 32;
}
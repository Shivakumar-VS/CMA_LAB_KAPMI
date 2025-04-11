function isLeapYear(){
    var c = document.getElementById("year").value;
    if(c>0){
        document.getElementById('prog3').innerHTML = (c%4==0)?"It is leap year":"It is not leap year";
    }
    else{
        document.getElementById('prog3').innerHTML = "Please enter a valid year";
    }
}
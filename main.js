
//triple 5 fucntion
var count = 3;
 
for (var i = 0; i < count; i++) {
    tripleFive();
}
 
function tripleFive() {
    document.write("Five! ");
}

// lastLetter function
function lastLetter() {
    var myfavoriteVacation="Greece";
    var the_length= myfavoriteVacation.length;
    var last_char= myfavoriteVacation.charAt(the_length-1);
        alert('The last character is '+last_char+'.');
    
}

// square function
function square(number) {
    return number * number;
  
// negate function
function negate(num) {
    return num * -1
}

//toArray function
function toArray (yourString) {
    var result = yourString.split(" ");
    return result;
}

function toArrayAgain (x, y, z) {
    return [x, y, z];
}

//startsWithA function
function startsWithA (yourWord) {
    var yourLowerCaseWord = yourWord.toLowerCase();
    var firstLetter = yourLowerCaseWord.charAt(0);
    if (firstLetter === "a") {
        return true;
    } else {
        return false;
    }
}

//excite function
function excite (excitingWords) {
    return excitingWords + "!!!";
}

//sun function
function sun (yourWord) {
    var lowerSun = yourWord.toLowerCase();
    var isSun = lowerSun.indexOf("sun");
    if (isSun >= 1) {
        return true;
    }
    else {
        return false;
    }
}

//tiny function
function tiny(yourNumber) {
    if (yourNumber > 1) {
        return false;
    }
    else if (yourNumber < 0) {
        return false;
    }
    else {
        return true;
    }
}

//getSeconds function
function getSeconds (timeInMmSs) {
    var splitTime = timeInMmSs.split(":");
    var minutes = splitTime[0];
    var seconds = splitTime[1];
    var convertedSeconds = seconds * 1;
    var convertedMinutes = minutes * 60;
    var totalTime = (convertedMinutes+convertedSeconds);
    return totalTime;
}









    
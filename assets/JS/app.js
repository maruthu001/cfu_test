
/*get the number of characters*/
function charLength() {

    let charsLength = document.getElementById('length').value;

    document.getElementById('result').innerHTML = charsLength;
    return charsLength;

}
console.log(charLength)

document.getElementById('length').addEventListener('change', charLength)



















function genarator() {

    document.getElementById("btn").removeAttribute("disabled");



    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let charactors="";
    let uppercase = document.getElementById('uppercase').checked

    if (uppercase === true) {
       
        charactors = upperCase
    }


    let lowerCase = "abcdefghijklmnopqrstuvwxyz"
    let lowercase = document.getElementById('lowercase').checked

    if (lowercase === true) {
       
        charactors = lowerCase
    }

    let number = "0123456789"
    let Number = document.getElementById('numbers').checked

    if (Number === true) {
       
        charactors = number
    }

    let symbole = "!@#$%^&*()"
    let Symbols = document.getElementById('symbols').checked

    if (Symbols === true) {
       
        charactors = symbole
    }


    if(uppercase === true && lowercase === true){
        charactors = upperCase+lowerCase
    }



    
    let passwordLength = charLength();
    let password = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * charactors.length);
        password += charactors.substring(randomNumber, randomNumber + 1);
    }


    document.getElementById("password__result").value = password;
}



document.getElementById('btn').addEventListener('click', genarator())





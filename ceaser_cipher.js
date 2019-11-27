// Ceaser cipher code

function cipher(string, number){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var encodoed = "";
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++){
        let char_s = string[i];
        let number_ = alphabet.indexOf(char_s);
        if (number_ != -1){
            let loop = number_ + number;
            if (loop > 25) encodoed += alphabet[loop - 26];
            else encodoed += alphabet[loop];
        }
        else encodoed += char_s;
    } 
    return encodoed;
}

console.log(cipher(" ", 0));

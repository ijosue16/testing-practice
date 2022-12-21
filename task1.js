function stringLength (string){
    if(string.length < 1 || string.length > 10 ){
        throw new Error('error');
    } else{
    return  string.length;
    }

}

 function ReverseWord(string1) {
    return string1.split('').reverse().join('')
 }

 function capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1);
 }

 module.exports.ReverseWord  = ReverseWord;
 module.exports.stringLength  = stringLength;
 module.exports.capitalize  = capitalize;

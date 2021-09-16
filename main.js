function validateNumber() {
    document.getElementById("result").innerHTML = telephoneCheck().toString();
}

function clearText() {
    document.getElementById("text").value = "";
    document.getElementById("result").innerHTML = "";
}


function telephoneCheck() {
  let str = document.getElementById("text").value;
  let brackets = 0;
  for(var i =0; i < str.length; i++) {
    if(str[i] === '(') {
      brackets++;
    }else if(str[i] === ')'){
      brackets--;
    }
  }
  if(brackets !== 0){
    return false;
  }
  // /^[1]?  : start the string with one ocurance of digit 1
  // [\s]?   : zero or more occurances of space
  // \(?     : zero or more occurances of opening parenthesis
  // \d{3}   : 3 digits
  // \)?     : zero or more occurances of closing parenthesis
  // [\s.-]? : zero or more occurances of space and/or hyphen
  // \d{3}   : next 3 digits
  // [\s.-]? : zero or more occurances of space and/or hyphen
  // \d{4}$/ : last 4 digits.
  return (/^[1]?[\s]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(str));
}

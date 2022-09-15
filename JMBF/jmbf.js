function compile(program) {
    let tape       = Array(1000).fill(0);
    let ptr        = 0;
    let isLooping  = false;
    let loopStack  = [];
    let innerLoops = 0;
    let printtxt = "";
  
    for( i = 0; i < program.length; i++ ) {
  
    const char = program[i];
  
      if(isLooping) {
        if(char === "[") innerLoops++;
          if(char === "]") {
            if(innerLoops === 0) isLooping = false;
            else innerLoops--;
          }
        continue;
      }
  
      switch(char){
        case '+':
          tape[ptr]++;
          break;
        case '-':
          tape[ptr]--;
          break;
        case ',':
          tape[ptr] = prompt()[0].charCodeAt()
          break;
        case '.':
          //console.log(String.fromCharCode(tape[ptr]));
          printtxt += String.fromCharCode(tape[ptr]);
          break;
        case '>':
          ptr++;
          tape[ptr] = tape[ptr] || 0;
          break;
        case '<':
          ptr--;
          tape[ptr] = tape[ptr] || 0;
          break;
        case '[':
          tape[ptr] === 0 
            ? isLooping = true
            : loopStack.push(i);
          break;
        case ']':
          tape[ptr] !== 0
            ? i = loopStack[loopStack.length-1]
            : loopStack.pop();
          break;
        default:
          break;
        }
      }
      document.getElementById('output').value = printtxt;
  }

function txttosymbol(eprogram) {
    let text = ["јustMOոikạ", "JuʂTmỏոӏkа",
                "ʝυSTmоNӏκą","βJυSTMօn!kaη",
                "JսʂtmOո1kаα","JùʂTmONIkа",
                "JüsTMօn1Kаβ","ηјusTMȯN!"];
    let progtxt = "";

    const jmArray = eprogram.split(" ");
    //return jmArray;
    for( i = 0; i < jmArray.length; i++ ) {
      const etext = jmArray[i];

      switch(etext) {
        case "\u0458\u0075\u0073\u0074\u004d\u004f\u0578\u0069\u006b\u1ea1":
          progtxt += "+";
          break;
        case "\u004a\u0075\u0282\u0054\u006d\u1ecf\u0578\u04cf\u006b\u0430":
          progtxt += "-";
          break;
        case "\u029d\u03c5\u0053\u0054\u006d\u043e\u004e\u04cf\u03ba\u0105":
          progtxt += ",";
          break;
        case "\u03b2\u004a\u03c5\u0053\u0054\u004d\u0585\u006e\u0021\u006b\u0061\u03b7":
          progtxt += ".";
          break;
        case "\u004a\u057d\u0282\u0074\u006d\u004f\u0578\u0031\u006b\u0430\u03b1":
          progtxt += ">";
          break;
        case "\u004a\u00f9\u0282\u0054\u006d\u004f\u004e\u0049\u006b\u0430":
          progtxt += "<";
          break;
        case "\u004a\u00fc\u0073\u0054\u004d\u0585\u006e\u0031\u004b\u0430\u03b2":
          progtxt += "[";
          break;
        case "\u03b7\u0458\u0075\u0073\u0054\u004d\u022f\u004e\u0021":
          progtxt += "]";
          break;
        default:
          //progtxt += etext + " ";
          break;
      }

    }
    //console.log(progtxt);
    //compile(progtxt);
    return progtxt;
}

function symboltotext(eprogram) {
  let text = ["\u0458\u0075\u0073\u0074\u004d\u004f\u0578\u0069\u006b\u1ea1", "\u004a\u0075\u0282\u0054\u006d\u1ecf\u0578\u04cf\u006b\u0430",
              "\u029d\u03c5\u0053\u0054\u006d\u043e\u004e\u04cf\u03ba\u0105","\u03b2\u004a\u03c5\u0053\u0054\u004d\u0585\u006e\u0021\u006b\u0061\u03b7",
              "\u004a\u057d\u0282\u0074\u006d\u004f\u0578\u0031\u006b\u0430\u03b1","\u004a\u00f9\u0282\u0054\u006d\u004f\u004e\u0049\u006b\u0430",
              "\u004a\u00fc\u0073\u0054\u004d\u0585\u006e\u0031\u004b\u0430\u03b2","\u03b7\u0458\u0075\u0073\u0054\u004d\u022f\u004e\u0021"];
  let progtxt = "";

  const jmArray = eprogram.split("");

  for( i = 0; i < jmArray.length; i++ ) {
    const etext = jmArray[i];

    switch(etext) {
      case "+":
        progtxt += text[0] + " ";
        break;
      case "-":
        progtxt += text[1] + " ";
        break;
      case ",":
        progtxt += text[2] + " ";
        break;
      case ".":
        progtxt += text[3] + " ";
        break;
      case ">":
        progtxt += text[4] + " ";
        break;
      case "<":
        progtxt += text[5] + " ";
        break;
      case "[":
        progtxt += text[6] + " ";
        break;
      case "]":
        progtxt += text[7] + " ";
        break;
      default:
        //progtxt += etext + " ";
        break;
    }

  }
  //console.log(progtxt);
  //compile(progtxt);
  return progtxt;
}

function toInput(message) {
  document.getElementById('input').value = message;
}
/*
	Creadores:
	Harold Martinez
	Didier Avila
	Emerson Gonzalez
	__________________________
	Estudiantes Uniremington del programa ingenieria de sistemas del 7to semestre
*/
function processGrammarOnDescendingRecognizer(grammar){
    
   var symbolStackValues = {
        Empty: "",
        A: "i",
        I: "i",
        D: "(,i,-",
        T: "(,i",
        L: "+,-,;,)",
        F: "(,i",
        S: "*,/,;,),+,-",
        P: "(,i",
        Equals: "=",//Desapile y avance
        ClosedParenthesis: ")"//Desapile y avance
    };
   // var a = isIdentifier("harold");
    var symbolStack = ["Empty","A"];
    //["Empty","A", "D", "=", "I"]
    for (var i = 0; i < grammar.length; i++) {
        var stackTop = symbolStack[symbolStack.length - 1];
        var token = grammar[i];
        switch(stackTop) {
            case "Empty":
                console.log("Borrame")
                break;
            case "A":
                if(isIdentifier(token)){
                    symbolStack.push("D", "=", "I");
                    i--;
                }
                break;
            case "I":
            if(isIdentifier(token)){
                symbolStack.pop();
            }
                break;
            case "D":
                if(isIdentifier(token)){
                    symbolStack.push("L", "T");
                    i--;
                }
                if(token == "("){
                    symbolStack.push("L", "T");
                    i--;
                }
                if(token == "-"){
                    symbolStack.push("L", "T");
                }
                break;
            case "T":
            if(isIdentifier(token) || token === "("){
                symbolStack.push("S", "F");
                i--;
            }
                break;
            case "L":
                code block
                break;
            case "F":
            if(isIdentifier(token) || token === "("){
                symbolStack.push("P");
                i--;
            }
                break;
            /*case "S":
                code block
                break;*/
            case "P":
            if(isIdentifier(token)){
                symbolStack.pop();
            }
            if(token == "("){
                symbolStack.push(")", "D");
            }
                break;
            case "=":
                if(token === "="){
                    symbolStack.pop();
                }
                break;
            /*case "ClosedParenthesis":
                code block
                break;*/
            default:
                console.log("Error")
        }
        console.log(symbolStack);
        console.log(grammar);
	}
}

function isIdentifier(value){
    var operators = ["=", "+", "-", "*", "/", "(", ")", ";"];
    for (var i = 0; i < operators.length; i++) {
        return (value != operators[i])
    }
}

//console.log("Esta bueno: "+ (token == "2"))
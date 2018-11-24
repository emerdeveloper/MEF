/*
	Creadores:
	Harold Martinez
	Didier Avila
	Emerson Gonzalez
	__________________________
	Estudiantes Uniremington del programa ingenieria de sistemas del 7to semestre
*/
function processGrammarOnDescendingRecognizer(grammar){
    console.log(grammar)
    grammar.pop();
    console.log(grammar)
    var symbolStack = ["Empty","A"];
    for (var i = 0; i < grammar.length; i++) {
        var stackTop = symbolStack[symbolStack.length - 1];
        var token = grammar[i];
        switch(stackTop) {
            case "Empty":
            if(token === ";"){
                console.log("Aceptación")
            }                
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
            if(token == "+" || token == "-"){
                symbolStack.push("L", "T");
            }
            if(token == ")" || token == ";"){
                symbolStack.pop();
                i--;
            }
                break;
            case "F":
            if(isIdentifier(token) || token === "("){
                symbolStack.push("P");
                i--;
            }
                break;
            case "S":
            if(token == "+" || token == "-" || token == ")" || token == ";"){
                symbolStack.pop();
                i--;
            }
            if(token == "*" || token == "/"){
                symbolStack.push("S", "F");
            }
                break;
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
            case ")":
            if(token === "="){
                symbolStack.pop();
            }
                break;
            default:
                console.log("Error")
        }
        console.log("Pila:" +symbolStack);
        console.log("token:" +token);
	}
}

function isIdentifier(value){
    var operators = ["=", "+", "-", "*", "/", "(", ")", ";"];
    for (var i = 0; i < operators.length; i++) {
        return (value != operators[i])
    }
}

//console.log("Esta bueno: "+ (token == "2"))
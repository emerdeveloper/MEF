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
                    symbolStack.pop();
                    symbolStack.push("D", "=", "I");
                    console.log("1");
                    i--;
                }
                break;
            case "I":
            if(isIdentifier(token)){
                symbolStack.pop();
                console.log("2");
            }
                break;
            case "D":
                if(isIdentifier(token)){
                    symbolStack.pop();
                    symbolStack.push("L", "T");
                    i--;
                    console.log("3");
                }
                if(token == "("){
                    symbolStack.pop();
                    symbolStack.push("L", "T");
                    i--;
                    console.log("3");
                }
                if(token == "-"){
                    symbolStack.pop();
                    symbolStack.push("L", "T");
                    console.log("4");
                }
                break;
            case "T":
            if(isIdentifier(token) || token === "("){
                symbolStack.pop();
                symbolStack.push("S", "F");
                i--;
                console.log("8");
            }
                break;
            case "L":
            if(token == "+" || token == "-"){
                symbolStack.pop();
                symbolStack.push("L", "T");
                console.log("5 o 6");
            }
            if(token == ")" || token == ";"){
                symbolStack.pop();
                i--;
                console.log("7");
            }
                break;
            case "F":
            if(isIdentifier(token) || token === "("){
                symbolStack.pop();
                symbolStack.push("P");
                i--;
                console.log("12");
            }
                break;
            case "S":
            if(token == "+" || token == "-" || token == ")" || token == ";"){
                symbolStack.pop();
                i--;
                console.log("11");
            }
            if(token == "*" || token == "/"){
                symbolStack.pop();
                symbolStack.push("S", "F");
                console.log("9 o 10");
            }
                break;
            case "P":
            if(isIdentifier(token)){
                symbolStack.pop();
                console.log("14");
            }
            if(token == "("){
                symbolStack.pop();
                symbolStack.push(")", "D");
                console.log("13");
            }
                break;
            case "=":
                if(token === "="){
                    symbolStack.pop();
                    console.log("desapile y avance");
                }
                break;
            case ")":
            if(token === "="){
                symbolStack.pop();
                console.log("desapile y avance");
            }
                break;
            default:
                console.log("Error")
        }
        console.log("token:" +token);
        console.log("Pila:" +symbolStack);        
	}
}

function isIdentifier(value){
    var operators = ["=", "+", "-", "*", "/", "(", ")", ";"];
    for (var i = 0; i < operators.length; i++) {
        return (value != operators[i])
    }
}

//console.log("Esta bueno: "+ (token == "2"))
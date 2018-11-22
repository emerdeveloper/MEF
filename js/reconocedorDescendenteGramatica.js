/*
	Creadores:
	Harold Martinez
	Didier Avila
	Emerson Gonzalez
	__________________________
	Estudiantes Uniremington del programa ingenieria de sistemas del 7to semestre
*/
function processGrammarOnDescendingRecognizer(grammar){
    var symbolStack = {
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
    grammar.map((data) => {
        switch(data) {
            case x:
                code block
                break;
            case y:
                code block
                break;
            default:
                code block
        }symbolStack
	});
}
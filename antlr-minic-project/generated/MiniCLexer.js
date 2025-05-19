// Generated from c://Users//valle//Downloads//chuchuAnalizador//50268//antlr-calculator-project//MiniC.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,11,70,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,1,0,1,0,1,0,1,0,
1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,
1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,5,9,57,8,9,10,9,12,9,60,9,9,
1,9,1,9,1,10,4,10,65,8,10,11,10,12,10,66,1,10,1,10,0,0,11,1,1,3,2,5,3,7,
4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,1,0,3,1,0,48,49,3,0,10,10,13,13,34,
34,3,0,9,10,13,13,32,32,71,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,
0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,
0,0,0,0,21,1,0,0,0,1,23,1,0,0,0,3,29,1,0,0,0,5,36,1,0,0,0,7,42,1,0,0,0,9,
44,1,0,0,0,11,46,1,0,0,0,13,48,1,0,0,0,15,50,1,0,0,0,17,52,1,0,0,0,19,54,
1,0,0,0,21,64,1,0,0,0,23,24,5,119,0,0,24,25,5,104,0,0,25,26,5,105,0,0,26,
27,5,108,0,0,27,28,5,101,0,0,28,2,1,0,0,0,29,30,5,112,0,0,30,31,5,114,0,
0,31,32,5,105,0,0,32,33,5,110,0,0,33,34,5,116,0,0,34,35,5,102,0,0,35,4,1,
0,0,0,36,37,5,98,0,0,37,38,5,114,0,0,38,39,5,101,0,0,39,40,5,97,0,0,40,41,
5,107,0,0,41,6,1,0,0,0,42,43,5,40,0,0,43,8,1,0,0,0,44,45,5,41,0,0,45,10,
1,0,0,0,46,47,5,123,0,0,47,12,1,0,0,0,48,49,5,125,0,0,49,14,1,0,0,0,50,51,
5,59,0,0,51,16,1,0,0,0,52,53,7,0,0,0,53,18,1,0,0,0,54,58,5,34,0,0,55,57,
8,1,0,0,56,55,1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,61,1,
0,0,0,60,58,1,0,0,0,61,62,5,34,0,0,62,20,1,0,0,0,63,65,7,2,0,0,64,63,1,0,
0,0,65,66,1,0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,68,1,0,0,0,68,69,6,10,0,
0,69,22,1,0,0,0,3,0,58,66,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class MiniCLexer extends antlr4.Lexer {

    static grammarFileName = "MiniC.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'while'", "'printf'", "'break'", "'('", 
                         "')'", "'{'", "'}'", "';'" ];
	static symbolicNames = [ null, "WHILE", "PRINTF", "BREAK", "LPAREN", "RPAREN", 
                          "LBRACE", "RBRACE", "SEMICOLON", "CONDICION", 
                          "CADENA", "WS" ];
	static ruleNames = [ "WHILE", "PRINTF", "BREAK", "LPAREN", "RPAREN", "LBRACE", 
                      "RBRACE", "SEMICOLON", "CONDICION", "CADENA", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

MiniCLexer.EOF = antlr4.Token.EOF;
MiniCLexer.WHILE = 1;
MiniCLexer.PRINTF = 2;
MiniCLexer.BREAK = 3;
MiniCLexer.LPAREN = 4;
MiniCLexer.RPAREN = 5;
MiniCLexer.LBRACE = 6;
MiniCLexer.RBRACE = 7;
MiniCLexer.SEMICOLON = 8;
MiniCLexer.CONDICION = 9;
MiniCLexer.CADENA = 10;
MiniCLexer.WS = 11;




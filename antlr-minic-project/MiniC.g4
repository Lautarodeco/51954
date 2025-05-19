grammar MiniC;

prog: instrucciones ;

instrucciones: instruccion* ;

instruccion: (bucle| sentencia);

bucle: WHILE LPAREN condicion RPAREN LBRACE sentencia* RBRACE ;

sentencia: (salida| terminar);

salida: PRINTF LPAREN CADENA RPAREN SEMICOLON ;

terminar: BREAK SEMICOLON ;

condicion: CONDICION;

// Tokens para palabras reservadas y símbolos
WHILE: 'while';
PRINTF: 'printf';
BREAK: 'break';
LPAREN: '(';
RPAREN: ')';
LBRACE: '{';
RBRACE: '}';
SEMICOLON: ';';

CONDICION: [0-1];

CADENA: '"' (~["\r\n])* '"' ;

// Espacios en blanco y saltos de línea
WS: [ \t\r\n]+ -> skip ;
import MiniCLexer from "./generated/MiniCLexer.js";
import MiniCParser from "./generated/MiniCParser.js";

import CustomMiniCVisitor from "./CustomMiniCVisitor.js";

import antlr4, {
  CharStreams,
  CommonTokenStream,
  ParseTreeWalker,
} from "antlr4";
import readline from "readline";
import fs from "fs";

async function main() {
  let input;

  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch (err) {
    input = await leerCadena();
    console.log(input);
  }

  let inputStream = CharStreams.fromString(input);
  let lexer = new MiniCLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new MiniCParser(tokenStream);
  let tree = parser.prog();

  if (parser.syntaxErrorsCount > 0) {
    console.error("\nSe encontraron errores de sintaxis en la entrada.");
  } else {
    console.log("\nEntrada válida.");
    //Arbol de lexemas
    console.log("\nTabla de tokens:");
    console.log("LEXEMA\t\tTOKEN");
    for (const token of tokenStream.tokens) {
      if (token.type !== -1) {
        const tokenName = parser.symbolicNames[token.type];
        console.log(`${token.text}\t\t${tokenName}`);
      }
    }
    console.log("\n");

    //Arbol de derivacion
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log(`Árbol de derivación: ${cadena_tree}`);

    const visitor = new CustomMiniCVisitor();
    visitor.visit(tree);

    //Codigo en JS
    console.log("Codigo en JavaScript:\n");
    console.log(visitor.jsCode);
    //Salida del código
    console.log("Resultado del código en JavaScript:\n");
    eval(visitor.jsCode);
  }
}

main();

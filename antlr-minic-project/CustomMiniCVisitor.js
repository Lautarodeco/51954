import MiniCVisitor from "./generated/MiniCVisitor.js";

class CustomMiniCVisitor extends MiniCVisitor {
  constructor() {
    super();
    this.jsCode = "";
  }

  visitProg(ctx) {
    this.jsCode = "";
    this.visitChildren(ctx);
    return this.jsCode;
  }

  visitBucle(ctx) {
    const condicion = ctx.condicion().getText();
    this.jsCode += `while(${condicion}) {\n`;
    ctx.sentencia().forEach((sent) => this.visit(sent));
    this.jsCode += `}\n`;
    return null;
  }

  visitSalida(ctx) {
    const texto = ctx.CADENA().getText();
    this.jsCode += `  console.log(${texto});\n`;
    return null;
  }

  visitTerminar(ctx) {
    this.jsCode += `  break;\n`;
    return null;
  }

  visitSentencia(ctx) {
    return this.visitChildren(ctx);
  }

  visitInstruccion(ctx) {
    return this.visitChildren(ctx);
  }

  visitInstrucciones(ctx) {
    return this.visitChildren(ctx);
  }

  visitCondicion(ctx) {
    return ctx.getText();
  }
}

export default CustomMiniCVisitor;

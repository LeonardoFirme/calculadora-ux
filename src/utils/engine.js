// src/utils/engine.js
/**
 * @file engine.js
 * @description Core de processamento aritmético de alta precisão.
 * @author Leonardo Firme
 * @version 1.0.0
 */

/**
 * @description Processa strings operacionais e retorna o resultado formatado.
 * @param {string} expression - A cadeia de caracteres contendo a operação.
 * @returns {string} Resultado calculado ou mensagem de erro.
 */
export const evaluateExpression = (expression) => {
  try {
    // Normalização rigorosa de caracteres especiais para operadores JS
    const sanitized = expression
      .replace(/÷/g, '/')
      .replace(/×/g, '*')
      .replace(/−/g, '-');

    // Execução em escopo isolado com Strict Mode para segurança e performance
    const compute = new Function(`"use strict"; return (${sanitized})`);
    const result = compute();

    // Validação de integridade numérica (previne NaN e Infinity)
    if (result === undefined || !isFinite(result)) {
      return "Erro";
    }

    // Formatação de saída: Inteiros puros ou Decimais com precisão fixa (2 casas)
    return String(
      Number.isInteger(result)
        ? result
        : parseFloat(result.toFixed(2))
    );
  } catch (error) {
    // Tratamento de exceções silencioso para manter a estabilidade da UX
    return "Erro";
  }
};
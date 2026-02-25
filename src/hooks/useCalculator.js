// src/hooks/useCalculator.js
/**
 * @file useCalculator.js
 * @description Hook de gerenciamento com persistência de histórico no resultado.
 * @author Leonardo Firme
 * @version 1.0.0
 */
import { useState, useTransition } from 'react';
import { evaluateExpression } from '../utils/engine';

export function useCalculator() {
  const [display, setDisplay] = useState('0');
  const [formula, setFormula] = useState('');
  const [isPending, startTransition] = useTransition();

  const addDigit = (digit) => {
    startTransition(() => {
      // Se houver um resultado anterior (fórmula contém '='), inicia nova conta
      if (formula.includes('=')) {
        setFormula('');
        setDisplay(digit === '.' ? '0.' : String(digit));
        return;
      }

      setDisplay(prev => {
        if (prev === '0' && digit === '0') return prev;
        if (prev === '0' && digit !== '.') return String(digit);
        if (digit === '.' && prev.includes('.')) return prev;
        return prev + String(digit);
      });
    });
  };

  const setOperator = (op) => {
    startTransition(() => {
      if (display === 'Erro') return;
      // Se clicar em operador após um resultado, usa o resultado como base
      const baseValue = formula.includes('=') ? display : display;
      setFormula(`${baseValue} ${op} `);
      setDisplay('0');
    });
  };

  const calculate = () => {
    startTransition(() => {
      if (!formula || formula.includes('=') || display === 'Erro') return;

      const fullExpression = formula + display;
      const result = evaluateExpression(fullExpression);

      // Mantém a expressão no histórico adicionando o símbolo de igual
      setFormula(`${fullExpression} =`);
      setDisplay(result);
    });
  };

  const reset = () => startTransition(() => { setDisplay('0'); setFormula(''); });

  const backspace = () => {
    startTransition(() => {
      if (formula.includes('=')) return; // Bloqueia delete no resultado final
      setDisplay(prev => (prev.length > 1 ? prev.slice(0, -1) : '0'));
    });
  };

  return { display, formula, addDigit, setOperator, calculate, reset, backspace, isPending };
}
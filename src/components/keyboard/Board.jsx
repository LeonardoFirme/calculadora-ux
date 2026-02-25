// src/components/keyboard/Board.jsx
/**
 * @file Board.jsx
 * @description Grid operacional moderno com divisórias minimalistas e ergonomia otimizada.
 * @author Leonardo Firme
 * @version 1.1.4
 */
import Key from './Key';

export default function Board({ ctrl }) {
  return (
    <div className="grid grid-cols-4 gap-px bg-gray-200 dark:bg-gray-800">
      {/* Linha 1: Limpeza e Funções */}
      <Key label="AC" onClick={ctrl.reset} variant="operator" className="font-bold text-gray-800 dark:text-gray-50" />
      <Key label="DEL" onClick={ctrl.backspace} variant="operator" className="text-gray-800 dark:text-gray-50" />
      <Key label="%" onClick={ctrl.applyPercentage} variant="operator" />
      <Key label="÷" onClick={() => ctrl.setOperator('÷')} variant="operator" />

      {/* Linha 2: 7-8-9-X */}
      <Key label="7" onClick={() => ctrl.addDigit('7')} />
      <Key label="8" onClick={() => ctrl.addDigit('8')} />
      <Key label="9" onClick={() => ctrl.addDigit('9')} />
      <Key label="×" onClick={() => ctrl.setOperator('×')} variant="operator" />

      {/* Linha 3: 4-5-6-Minus */}
      <Key label="4" onClick={() => ctrl.addDigit('4')} />
      <Key label="5" onClick={() => ctrl.addDigit('5')} />
      <Key label="6" onClick={() => ctrl.addDigit('6')} />
      <Key label="−" onClick={() => ctrl.setOperator('−')} variant="operator" />

      {/* Linha 4: 1-2-3-Plus */}
      <Key label="1" onClick={() => ctrl.addDigit('1')} />
      <Key label="2" onClick={() => ctrl.addDigit('2')} />
      <Key label="3" onClick={() => ctrl.addDigit('3')} />
      <Key label="+" onClick={() => ctrl.setOperator('+')} variant="operator" />

      {/* Linha 5: Base Funcional */}
      <Key label="+/-" onClick={ctrl.toggleSign} />
      <Key label="0" onClick={() => ctrl.addDigit('0')} />
      <Key label="." onClick={() => ctrl.addDigit('.')} />
      <Key label="=" onClick={ctrl.calculate} variant="action" />
    </div>
  );
}
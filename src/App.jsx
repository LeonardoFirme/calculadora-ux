// src/App.jsx
/**
 * @file App.jsx
 * @description Orquestrador principal com layout moderno e minimalista.
 * @author Leonardo Firme
 * @version 1.1.4
 */
import React from 'react';
import { useCalculator } from './hooks/useCalculator';
import CalculatorRoot from './components/layout/CalculatorRoot';
import Screen from './components/display/Screen';
import Board from './components/keyboard/Board';

export default function App() {
  const calc = useCalculator();

  return (
    <CalculatorRoot>
      {/* Visor com padding e gradiente otimizado */}
      <Screen formula={calc.formula} display={calc.display} />

      {/* Teclado com gap-px para separação de 1px */}
      <Board ctrl={calc} />

      {/* Footer com tipografia profissional */}
      <footer className="flex h-16 items-center justify-center border-t border-gray-100 bg-white transition-colors dark:border-gray-900 dark:bg-gray-950">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-bold tracking-[0.5em] text-gray-400 dark:text-gray-200 uppercase">
            Calculadora App
          </span>
          <div className="h-1 w-4 rounded-full bg-gray-200 dark:bg-gray-800" />
        </div>
      </footer>
    </CalculatorRoot>
  );
}
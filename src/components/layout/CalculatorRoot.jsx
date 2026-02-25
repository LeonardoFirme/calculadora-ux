// src/components/layout/CalculatorRoot.jsx
/**
 * @file CalculatorRoot.jsx
 * @description Wrapper estrutural com borda 3D reforçada e profundidade de hardware.
 * @author Leonardo Firme
 * @version 1.0.0
 */

import React from 'react';

/**
 * @description Aplica uma moldura 3D (bevel effect) ao redor do chassi da calculadora.
 * @param {React.ReactNode} children - Componentes internos.
 */
export default function CalculatorRoot({ children }) {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gray-100 p-4 transition-colors duration-300 dark:bg-gray-950">
      {/* Moldura Externa 3D: Simula a borda física chanfrada */}
      <div className="relative w-full max-w-[370px] rounded-[3.5rem] p-[10px]
        bg-linear-to-br from-gray-200 to-gray-50
        shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]
        dark:from-gray-800 dark:to-gray-950
        dark:shadow-[20px_20px_60px_#020617,-20px_-20px_60px_#0f172a]">

        {/* Chassi Interno: A face superior da calculadora */}
        <section className="relative z-10 flex flex-col overflow-hidden rounded-[2.5rem] border border-gray-200 bg-gray-50 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.8),inset_-2px_-2px_5px_rgba(0,0,0,0.1)] transition-all dark:border-gray-800 dark:bg-gray-950 dark:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.05),inset_-2px_-2px_5px_rgba(0,0,0,0.5)]">
          {children}
        </section>

        {/* Efeito de iluminação na borda da moldura */}
        <div className="absolute inset-0 rounded-[3.5rem] border border-white/50 pointer-events-none dark:border-white/5" />
      </div>

      {/* Branding de Autoria */}
      <div className="fixed bottom-8 left-0 right-0 flex justify-center opacity-40 hover:opacity-100 transition-opacity duration-500">
        <p className="text-[10px] font-bold tracking-[0.5em] text-gray-400 dark:text-gray-200 uppercase">
          Leonardo Firme
        </p>
      </div>
    </main>
  );
}
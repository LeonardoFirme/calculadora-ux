// src/components/display/Screen.jsx
/**
 * @file Screen.jsx
 * @description Visor de alta precisão com suporte a histórico persistente.
 * @author Leonardo Firme
 * @version 1.0.0
 */

import React from 'react';

export default function Screen({ formula, display }) {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-950">
      <div className="flex flex-col justify-end bg-linear-to-br from-gray-100 to-white px-8 pt-12 pb-6 text-right rounded-3xl shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] transition-all dark:from-gray-900 dark:to-gray-950 dark:shadow-[inset_6px_6px_12px_#020617,inset_-6px_-6px_12px_#0f172a]">

        {/* Histórico: text-gray-500 (Light) / text-gray-100 (Dark) */}
        <div className="min-h-[24px] overflow-hidden text-ellipsis whitespace-nowrap text-xs font-bold tracking-widest text-gray-500 uppercase transition-colors dark:text-gray-100">
          {formula || '\u00A0'}
        </div>

        {/* Resultado: text-gray-800 (Light) / text-gray-50 (Dark) */}
        <h1 className="mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-6xl font-extralight tabular-nums tracking-tighter text-gray-800 transition-colors dark:text-gray-50">
          {display}
        </h1>

        <div className="mt-4 h-px w-full bg-gray-200 dark:bg-gray-800 opacity-50" />
      </div>
    </div>
  );
}
// src/components/keyboard/Key.jsx
/**
 * @file Key.jsx
 * @description Componente atômico de interação da calculadora.
 * @author Leonardo Firme
 * @version 1.0.0
 */

import React from 'react';

/**
 * @description Botão estilizado com variantes de cores e efeito 3D (Neumorfismo).
 * @param {Object} props
 * @param {string|number} props.label - Texto ou símbolo exibido na tecla.
 * @param {function} props.onClick - Handler de clique.
 * @param {'default'|'operator'|'action'} props.variant - Define a paleta de cores.
 * @param {string} props.className - Classes adicionais para ajustes de grid (col-span, etc).
 */
export default function Key({ label, onClick, variant = 'default', className = '' }) {
  // Mapeamento de estilos 3D (Shadow para relevo, Inset para clique)
  const styles = {
    /**
     * @style default: Teclas numéricas.
     */
    default: "bg-gray-50 text-gray-400 shadow-[6px_6px_12px_#d1d5db,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] dark:bg-gray-950 dark:text-gray-200 dark:shadow-[6px_6px_12px_#020617,-6px_-6px_12px_#0f172a] dark:active:shadow-[inset_4px_4px_8px_#020617,inset_-4px_-4px_8px_#0f172a]",

    /**
     * @style operator: Teclas de função e operadores.
     */
    operator: "bg-gray-100 text-gray-500 shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff] active:shadow-[inset_3px_3px_6px_#d1d5db,inset_-3px_-3px_6px_#ffffff] dark:bg-gray-900 dark:text-gray-100 dark:shadow-[4px_4px_8px_#020617,-4px_-4px_8px_#0f172a] dark:active:shadow-[inset_3px_3px_6px_#020617,inset_-3px_-3px_6px_#0f172a]",

    /**
     * @style action: Tecla de execução (=).
     */
    action: "bg-gray-800 text-white shadow-[6px_6px_12px_rgba(0,0,0,0.3)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.5)] dark:bg-gray-50 dark:text-gray-950 dark:shadow-[6px_6px_12px_rgba(0,0,0,0.4)] dark:active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.6)]"
  };

  return (
    <div className="p-2 bg-gray-50 dark:bg-gray-950">
      <button
        type="button"
        onClick={onClick}
        className={`
          flex h-16 w-full items-center justify-center text-xl font-medium rounded-2xl
          transition-all duration-100 cursor-pointer outline-none
          active:scale-95
          ${styles[variant]}
          ${className}
        `}
      >
        {label}
      </button>
    </div>
  );
}
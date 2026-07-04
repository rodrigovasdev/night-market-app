interface AccordionProps {
  title: string;
  children?: React.ReactNode;
  items?: string[];
  defaultOpen?: boolean;
}

import { useState } from 'react';

const Accordion = ({ title, children, items, defaultOpen = false } : AccordionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [optionSelected, setOptionSelected] = useState<string[]>([]);

  // Función para manejar el cambio de selección
  const handleOptionChange = (item: string, checked: boolean) => {
    if (checked) {
      setOptionSelected((prev) => [...prev, item]);
    } else {
      setOptionSelected((prev) => prev.filter((i) => i !== item));
    }
  };


  return (
    <div className={`w-full overflow-hidden `}>
      {/* Encabezado del acordeón */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 text-left transition-colors duration-400 flex justify-between items-center cursor-pointer border-b border-gray-200 `}
      >
        <h1 className="font-bold text-lg my-auto">{title}</h1>
        <svg
          className={`w-6 h-6 text-gray-950 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Contenido del acordeón con animación */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden flex flex-col text-left ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        {items && items.length > 0 ? (
          items.map((item) => (
            <label
      key={item}
      htmlFor={item}
      onClick={() => handleOptionChange(item, optionSelected.includes(item))} // Evita que el click cierre el acordeón
      className="flex items-center gap-2 px-4 py-2.5 border-b-1 border-gray-200 cursor-pointer w-full"
    >
      <input
        type="checkbox"
        checked={optionSelected.includes(item)}
        onChange={(e) => handleOptionChange(item, e.target.checked)}
        name={item}
        id={item}
        className="cursor-pointer"
      />
      <span className="font-semibold">{item}</span>
    </label>
          ))
        ) : (
          <div>
            {children}
          </div>
        )}
      
      </div>
    </div>
  );
};

export default Accordion;
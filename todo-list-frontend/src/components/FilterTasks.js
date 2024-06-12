import React from 'react';

// Componente funcional FilterTasks que recebe filter e setFilter como props
const FilterTasks = ({ filter, setFilter }) => {
  return (
    <div>
      {/* Input para filtrar as tarefas por título */}
      <input 
        type="text" 
        value={filter} // Valor do input é o estado 'filter'
        onChange={(e) => setFilter(e.target.value)} // Atualiza o estado 'filter' quando o input é alterado
        placeholder="Filtrar tarefas por título..." // Placeholder do input
      />
    </div>
  );
};

export default FilterTasks; // Exporta o componente

import React, { useState, useEffect } from 'react';

// Componente funcional EditTaskForm que recebe task, updateTask, cancelEdit e isEditing como props
const EditTaskForm = ({ task, updateTask, cancelEdit, isEditing }) => {
  // Define os estados utilizando o useState hook
  const [title, setTitle] = useState(''); // Estado para o título da tarefa
  const [description, setDescription] = useState(''); // Estado para a descrição da tarefa
  const [dueDate, setDueDate] = useState(''); // Estado para a data de vencimento da tarefa
  const [priority, setPriority] = useState(''); // Estado para a prioridade da tarefa
  const [category, setCategory] = useState(''); // Estado para a categoria da tarefa

  // Utiliza o useEffect hook para atualizar os estados quando o valor de isEditing ou task mudar
  useEffect(() => {
    if (isEditing) {
      // Preenche os estados com os valores da tarefa atual quando começar a edição
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.dueDate);
      setPriority(task.priority);
      setCategory(task.category);
    }
  }, [isEditing, task]);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página
    // Cria um objeto representando a tarefa atualizada
    const updatedTask = { ...task, title, description, dueDate, priority, category };
    // Chama a função updateTask passando a tarefa atualizada como argumento
    updateTask(updatedTask);
  };

  // Renderiza o formulário de edição de tarefa
  return (
    <form onSubmit={handleSubmit} className="edit-task-form">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Título" 
        required // Campo obrigatório
      />
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Descrição" 
      />
      <input 
        type="date" 
        value={dueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
      />
      <select 
        value={priority} 
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Categoria" 
      />
      <button type="submit">Atualizar Tarefa</button> {/* Botão de submissão do formulário */}
      <button type="button" onClick={cancelEdit}>Cancelar</button> {/* Botão para cancelar a edição */}
    </form>
  );
};

export default EditTaskForm; // Exporta o componente

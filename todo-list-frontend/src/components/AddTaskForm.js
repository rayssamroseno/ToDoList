import React, { useState } from 'react';

// Componente funcional AddTaskForm que recebe a função addTask como prop
const AddTaskForm = ({ addTask }) => {
  // Define os estados utilizando o useState hook
  const [title, setTitle] = useState(''); // Estado para o título da tarefa
  const [description, setDescription] = useState(''); // Estado para a descrição da tarefa
  const [dueDate, setDueDate] = useState(''); // Estado para a data de vencimento da tarefa
  const [priority, setPriority] = useState(''); // Estado para a prioridade da tarefa
  const [category, setCategory] = useState(''); // Estado para a categoria da tarefa

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de recarregar a página

    // Verifica se todos os campos obrigatórios foram preenchidos
    if (!title || !description || !dueDate || !priority || !category) return;

    // Cria um objeto representando a nova tarefa
    const newTask = {
      title,
      description,
      dueDate,
      priority,
      category,
      completed: false // Define o estado de completude como falso por padrão
    };

    // Chama a função addTask passando a nova tarefa como argumento
    addTask(newTask);

    // Limpa os estados após adicionar a tarefa
    setTitle('');
    setDescription('');
    setDueDate('');
    setPriority('');
    setCategory('');
  };

  // Renderiza o formulário de adição de tarefa
  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título da Tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required // Campo obrigatório
      />
      <textarea
        placeholder="Descrição da Tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required // Campo obrigatório
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        required // Campo obrigatório
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        required // Campo obrigatório
      >
        <option value="">Nível de Importância</option>
        <option value="Baixa">Baixa</option>
        <option value="Média">Média</option>
        <option value="Alta">Alta</option>
      </select>
      <input
        type="text"
        placeholder="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required // Campo obrigatório
      />
      <button type="submit">Adicionar Tarefa</button> {/* Botão de submissão do formulário */}
    </form>
  );
};

export default AddTaskForm; // Exporta o componente

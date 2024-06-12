import React from 'react';

// Componente funcional TaskList que recebe tasks, deleteTask, startEditing e completeTask como props
const TaskList = ({ tasks, deleteTask, startEditing, completeTask }) => {
  return (
    <div className="task-list">
      {/* Mapeia todas as tarefas e renderiza cada uma delas */}
      {tasks.map((task) => (
        <div key={task._id} className="task-item"> {/* Utiliza o ID da tarefa como chave */}
          <h3>{task.title}</h3> {/* Título da tarefa */}
          <p>{task.description}</p> {/* Descrição da tarefa */}
          <p>Data: {new Date(task.dueDate).toLocaleDateString()}</p> {/* Data de vencimento da tarefa */}
          <p>Importância: {task.priority}</p> {/* Prioridade da tarefa */}
          <p>Categoria: {task.category}</p> {/* Categoria da tarefa */}
          <p>Status: {task.completed ? 'Completado' : 'Incompleto'}</p> {/* Status da tarefa */}
          <div className="buttons">
            {/* Botão para marcar/desmarcar a tarefa como completa */}
            <button onClick={() => completeTask(task._id)} className="complete">
              {task.completed ? 'Desmarcar' : 'Completo'}
            </button>
            {/* Botão para iniciar a edição da tarefa */}
            <button onClick={() => startEditing(task)} className="edit">
              Editar
            </button>
            {/* Botão para excluir a tarefa */}
            <button onClick={() => deleteTask(task._id)} className="delete">
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList; // Exporta o componente

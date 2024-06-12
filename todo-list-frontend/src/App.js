import React, { Component } from 'react';
import AddTaskForm from './components/AddTaskForm'; // Importa o componente para adicionar tarefas
import EditTaskForm from './components/EditTaskForm'; // Importa o componente para editar tarefas
import FilterTasks from './components/FilterTasks'; // Importa o componente para filtrar tarefas
import TaskList from './components/TaskList'; // Importa o componente para exibir a lista de tarefas
import './index.css'; // Importa o arquivo de estilo

class App extends Component {
  constructor(props) {
    super(props);
    // Estado inicial do componente
    this.state = {
      tasks: [], // Lista de tarefas
      filter: '', // Filtro de pesquisa
      editingTask: null, // Tarefa atualmente em edição
      isEditing: false, // Indica se está em processo de edição
    };
  }

  componentDidMount() {
    // Chamado após o componente ser montado
    this.fetchTasks(); // Carrega as tarefas do servidor
  }

  // Método para obter as tarefas do servidor
  fetchTasks = () => {
    fetch('http://localhost:5000/tasks')
      .then(response => response.json())
      .then(data => {
        console.log('Tarefas obtidas:', data);
        this.setState({ tasks: data });
      })
      .catch(error => console.error('Erro ao obter a lista de tarefas:', error));
  };

  // Método para adicionar uma nova tarefa
  addTask = (task) => {
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Tarefa adicionada:', data);
      // Atualiza o estado com a nova tarefa
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, data]
      }), () => {
        console.log('Estado atualizado:', this.state.tasks);
      });
    })
    .catch(error => console.error('Erro ao adicionar a tarefa:', error));
  };

  // Método para atualizar uma tarefa existente
  updateTask = (updatedTask) => {
    fetch(`http://localhost:5000/tasks/${updatedTask._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Tarefa atualizada:', data);
      // Atualiza o estado com a tarefa atualizada
      this.setState((prevState) => ({
        tasks: prevState.tasks.map(task => 
          task._id === data._id ? data : task
        ),
        editingTask: null, // Limpa a tarefa em edição
        isEditing: false, // Sai do modo de edição
      }), () => {
        console.log('Estado atualizado após edição:', this.state.tasks);
      });
    })
    .catch(error => console.error('Erro ao atualizar a tarefa:', error));
  };

  // Método para excluir uma tarefa
  deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      console.log('Tarefa excluída:', id);
      // Atualiza o estado removendo a tarefa excluída
      this.setState((prevState) => ({
        tasks: prevState.tasks.filter(task => task._id !== id),
      }), () => {
        console.log('Estado atualizado após exclusão:', this.state.tasks);
      });
    })
    .catch(error => console.error('Erro ao excluir a tarefa:', error));
  };

  // Método para marcar uma tarefa como completa ou incompleta
  completeTask = (id) => {
    const taskToComplete = this.state.tasks.find(task => task._id === id);
    const updatedTask = { ...taskToComplete, completed: !taskToComplete.completed };
    this.updateTask(updatedTask);
  };

  // Método para definir o filtro de tarefas
  setFilter = (filter) => {
    this.setState({ filter });
  };

  // Método para iniciar a edição de uma tarefa
  startEditing = (task) => {
    this.setState({ editingTask: task, isEditing: true });
  };

  // Método para cancelar a edição de uma tarefa
  cancelEdit = () => {
    this.setState({ editingTask: null, isEditing: false });
  };

  // Método para filtrar as tarefas com base no filtro atual
  filterTasks = () => {
    const { tasks, filter } = this.state;
    if (!filter) return tasks; // Retorna todas as tarefas se não houver filtro
    // Filtra as tarefas cujo título contenha o filtro (ignora maiúsculas/minúsculas)
    return tasks.filter(task =>
      task.title.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { editingTask, isEditing } = this.state;
    const tasksToShow = this.filterTasks(); // Tarefas a serem exibidas de acordo com o filtro

    return (
      <div className="App">
        {/* Título da aplicação */}
        <h1 style={{ fontFamily: 'Pacifico', fontSize: '2.5rem', color: '#007BFF', marginBottom: '20px' }}>
          <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
          To do List
        </h1>
        
        {/* Componente de filtro de tarefas */}
        <FilterTasks setFilter={this.setFilter} />

        <div className="task-components">
          {/* Condicional para renderizar o formulário de adição ou edição de tarefas */}
          {isEditing ? (
            <EditTaskForm
              task={editingTask}
              updateTask={this.updateTask}
              cancelEdit={this.cancelEdit}
              isEditing={isEditing}
            />
          ) : (
            <AddTaskForm addTask={this.addTask} />
          )}
        </div>

        {/* Lista de tarefas */}
        <TaskList
          tasks={tasksToShow}
          deleteTask={this.deleteTask}
          startEditing={this.startEditing}
          completeTask={this.completeTask}
        />
      </div>
    );
  }
}

export default App;

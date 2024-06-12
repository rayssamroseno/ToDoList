const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importe o módulo cors
const Task = require('./taskModel');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/todo-list-db')
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso!');
  })
  .catch((error) => {
    console.error('Erro de conexão com o banco de dados:', error);
  });

app.use(cors()); // Use o middleware cors
app.use(express.json());


// Rota para obter todas as tarefas
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    console.error('Erro ao obter tarefas:', error);
    res.status(500).json({ message: 'Erro ao obter tarefas.' });
  }
});

// Rota para adicionar uma nova tarefa
app.post('/tasks', async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.json(newTask);
  } catch (error) {
    console.error('Erro ao adicionar a tarefa:', error);
    res.status(500).json({ message: 'Erro ao adicionar a tarefa.' });
  }
});

// Rota para atualizar uma tarefa existente
app.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (error) {
    console.error('Erro ao atualizar a tarefa:', error);
    res.status(500).json({ message: 'Erro ao atualizar a tarefa.' });
  }
});

// Rota para excluir uma tarefa
app.delete('/tasks/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tarefa excluída com sucesso.' });
  } catch (error) {
    console.error('Erro ao excluir a tarefa:', error);
    res.status(500).json({ message: 'Erro ao excluir a tarefa.' });
  }
});

// Iniciar o servidor na porta especificada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

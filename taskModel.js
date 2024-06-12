// Importa o módulo mongoose para utilizar suas funcionalidades
const mongoose = require('mongoose');

// Define o esquema da tarefa utilizando o Schema do Mongoose
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Título da tarefa, obrigatório
  description: { type: String }, // Descrição da tarefa
  dueDate: { type: Date }, // Data de cumprir a tarefa
  priority: { 
    type: String, 
    enum: ['Baixa', 'Média', 'Alta'], // Prioridade da tarefa, valores permitidos são 'Baixa', 'Média' e 'Alta'
    default: 'Média' // Valor padrão é 'Média' se não for especificado
  },
  category: { type: String }, // Categoria da tarefa
  completed: { type: Boolean, default: false }, // Indica se a tarefa está completa ou não, padrão é false
}, { timestamps: true }); // Opção para adicionar campos de createdAt e updatedAt automaticamente

// Cria o modelo Task baseado no esquema taskSchema
const Task = mongoose.model('Task', taskSchema);

// Exporta o modelo para ser utilizado em outras partes da aplicação
module.exports = Task;

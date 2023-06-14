// eslint-disable-next-line no-unused-vars
import React from 'react';
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';
import { TodosProvider } from '@/context/TodosContext';

const TodosLogic = () => {
  return (
    <TodosProvider>
      {/* Render the InputTodo component for adding new todos */}
      <InputTodo />

      {/* Render the TodosList component for displaying and managing todos */}
      <TodosList />
    </TodosProvider>
  );
};

export default TodosLogic;

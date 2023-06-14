import React from 'react';
import TodoItem from '@/components/TodoItem';
import { useTodosContext } from '@/context/TodosContext';
function TodosList() {
    const { todos } = useTodosContext();
  
    return (
      React.createElement('ul', null,
        // Map through the todos array and render a TodoItem component for each todo
        todos.map((todo) => (
          React.createElement(TodoItem, { key: todo.id, itemProp: todo })
        ))
      )
    );
  }
  
  export default TodosList;
  
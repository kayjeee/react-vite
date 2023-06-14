/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useTodosContext } from '@/context/TodosContext';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const { addTodoItem } = useTodosContext();

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.trim()) {
            addTodoItem(title);
            setTitle('');
            setMessage('');
        } else {
            setMessage('Please add an item.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    type="text"
                    placeholder="Add Todo..."
                    value={title}
                    onChange={handleChange}
                    className="input-text"
                />
                <button type="submit" className="input-submit">
                    <FaPlusCircle
                        style={{
                            color: '#5e5e5e',
                            fontSize: '20px',
                            marginTop: '2px',
                        }}
                    />
                </button>
            </form>
            <span className="submit-warning">{message}</span>
        </>
    );
};

export default InputTodo;

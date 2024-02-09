import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  toggleTodo,
  removeTodo,
  markCompleted,
  markIncomplete,
  editTodo,
} from '../redux/todoList'; 
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';
import { MdOutlineModeEditOutline } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import PropTypes from 'prop-types';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEditSave = () => {
    dispatch(editTodo({ id: todo.id, text: editedTitle }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    const isConfirmed = window.confirm('Are you sure you want to delete this todo?');
    if (isConfirmed) {
      dispatch(removeTodo({ id: todo.id }));
    }
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">
          {todo.id}.
        </span>
        {isEditing ? (
          <input
            className="p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 "
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleEditSave}
            autoFocus
          />
        ) : (
          <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.title}
          </span>
        )}
      </div>
      <div className='space-x-3 ml-8'>
        <button
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(toggleTodo({ id: todo.id }))}
        >
          {!todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        {todo.completed && (
          <button
            className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted({ id: todo.id }))}
          >
            <FaCheck />
          </button>
        )}
        {!todo.completed && (
          <button
            className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete({ id: todo.id }))}
          >
            <FaTimes />
          </button>
        )}
        <button
          className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={handleDelete}
        >
          <FaTrash />
        </button>
        <button
          className="text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => setIsEditing(true)}
        >
          <MdOutlineModeEditOutline />
        </button>
        <button
          className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={handleEditSave}
        >
          <IoIosSave />
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default TodoItem;

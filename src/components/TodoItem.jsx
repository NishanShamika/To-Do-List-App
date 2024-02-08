import { FaToggleOn, FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

const TodoItem = () => {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
        <div className="flex items-center">
            <span className="mr-4 text-gray-500"></span>
        </div>
        <div>
            <button className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"><FaToggleOn /></button>
            <button className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"><FaTrash /></button>
            <button className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"><FaCheck /></button>
            <button className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"><FaTimes /></button>
        </div>
    </li>
  );
};

export default TodoItem;
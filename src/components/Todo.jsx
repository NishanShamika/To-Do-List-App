import { HiPlus } from "react-icons/hi";
import { IoSearch  } from "react-icons/io5";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
        <h1 className="mt 3 mb-6 text-2xl font-bold text-center uppercase">To-Do List App</h1>

        <div className="flex items-center mb-4">
            <input 
                type="text" 
                name="addTodoInput" 
                id="addTodoInput" 
                placeholder="Add Todo" 
                className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                <HiPlus size={20}/>
            </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <FilterButton/>
            <div className="flex items-center mb-4">
                <input 
                    type="text" 
                    name="addTodoInput" 
                    id="addTodoInput" 
                    placeholder="search" 
                    className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
                    <IoSearch size={20}/>
                </button>
            </div>
        </div>
        <TodoList/>
    </div>
  );
};

export default Todo
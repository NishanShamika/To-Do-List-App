import { useDispatch, useSelector } from 'react-redux';
import { filterTodos} from '../redux/todoList';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.todos.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos({ filter }));
  };

  return (
    <div className="flex space-x-4 items-center mb-4">
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>

    </div>
  );
};

export default FilterButtons;

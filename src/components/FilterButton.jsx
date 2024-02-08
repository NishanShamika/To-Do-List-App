

const FilterButton = () => {
  return (
    <div className="flex space-x-4 items-center">
        <select className="text-sm px-2 rounded boder border-gray-300 focus:outline-none">
            <option value="ALL">All</option>
            <option value="COMPLETED">completed</option>
            <option value="INCOMPLETED">Incomplete</option>
        </select>
    </div>
  )
}

export default FilterButton
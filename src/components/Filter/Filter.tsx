import { useState, useCallback } from 'react';
import ClearCompletedButton from '../ClearCompletedButton/ClearCompletedButton';
import { FilterProps, TaskType } from '../../shared/Types';
import "./Filter.css"

const Filter = ({onSelectionChange, onClearCompleted} : FilterProps ) => {
  const [selectedValue, setSelectedValue] = useState<string>('all');
  const [searchValue, setSearchValue] = useState<string>('');

  const handleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onSelectionChange(() => (task: TaskType) => {
      const matched: boolean = task.name.toLowerCase().includes(searchValue.toLowerCase());
      const option: boolean = (event.target.value === 'completed' && task.done) || (event.target.value === 'active' && !task.done) || event.target.value === 'all';
  
      return matched && option;
    });
  }, [onSelectionChange, searchValue]);

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    onSelectionChange(() => (task: TaskType) => {
      const matched: boolean = task.name.toLowerCase().includes(event.target.value.toLowerCase());
      const option: boolean = (selectedValue === 'completed' && task.done) || (selectedValue === 'active' && !task.done) || selectedValue === 'all';
  
      return matched && option;
    });
  }, [onSelectionChange, selectedValue]);

  return (
    <div className="filter">
      <select className='dropdown' name="dropdown" value={selectedValue} onChange={handleChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <ClearCompletedButton 
        onClearCompleted={onClearCompleted}
      />
    </div>
  );
}

export default Filter;
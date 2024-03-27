import { useState } from 'react';

import ClearCompletedButton from './ClearCompletedButton';

import { FilterProps } from '../shared/Types';
import "./Filter.css"

const Filter = ({ onSelectionChange, onClearCompleted } : FilterProps ) => {
  const [selectedValue, setSelectedValue] = useState<string>('all');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onSelectionChange(
      (task) => {
        if (event.target.value === 'completed') {
          return task.done;
        }
        if (event.target.value === 'active') {
          return !task.done;
        }
        return true;
      }
    );
  }

  return (
    <div className="filter">
      <select className='dropdown' name="dropdown" value={selectedValue} onChange={handleChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
      <ClearCompletedButton 
        onClearCompleted={onClearCompleted}
      />
    </div>
  );
}

export default Filter;

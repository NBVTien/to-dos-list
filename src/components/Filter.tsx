import React, { useState } from 'react';
import { FilterProps } from '../shared/Types';

const Filter = ( {onSelectionChange} : FilterProps ) => {
  const [selectedValue, setSelectedValue] = useState<string>('all');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onSelectionChange(event.target.value);
  }

  return (
    <div>
      <select name="filter" value={selectedValue} onChange={handleChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}

export default Filter;

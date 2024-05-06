import { ClearCompletedButtonProps } from "../../shared/Types";

import './ClearCompletedButton.css';

const ClearCompletedButton = ({onClearCompleted}: ClearCompletedButtonProps) => {
  return (
    <button 
      onClick={onClearCompleted}
      className='clear-completed'
    >
      <img src='trash.svg' alt='Clear completed tasks' />
    </button>
  );
}

export default ClearCompletedButton;
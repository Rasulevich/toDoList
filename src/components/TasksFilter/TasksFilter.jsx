import React from 'react';
import './TasksFilter.css';
import '../todoapp.css';
import '../main.css';
import PropTypes from 'prop-types';

const TasksFilter = ({ showAllTasks, showActiveTasks, showCompleteTasks,filter }) => (
  <ul className="filters">
    <li>
      <button
        type="button"
        className={filter === 'all' ? "selected" : ""}
        onClick={showAllTasks}      
      >
        All
      </button>
    </li>
    <li>
      <button type="button" 
              onClick={showActiveTasks}
              className={filter === 'active' ? "selected" : ""}
              >Active</button>
    </li>
    <li>
      <button type="button" 
              onClick={showCompleteTasks}
              className={filter === 'done' ? "selected" : ""}
              >Completed</button>
    </li>
  </ul>
);
TasksFilter.defaultProps = {
    showActiveTasks: () => { },
    showCompleteTasks: () => { },
    showAllTasks: () => { },
    filter: 'all'
};
TasksFilter.propTypes = {
    showActiveTasks: PropTypes.func,
    showCompleteTasks: PropTypes.func,
    showAllTasks: PropTypes.func,
    filter: PropTypes.string
};

export default TasksFilter;

import React from 'react';
import './TasksFilter.css';
import '../todoapp.css';
import '../main.css';
import PropTypes from 'prop-types';

const TasksFilter = ({ showAllTasks, showActiveTasks, showCompleteTasks }) => (
  <ul className="filters">
    <li>
      <button
        type="button"
        className="selected"
        onClick={showAllTasks}
      >
        All
      </button>
    </li>
    <li>
      <button type="button" onClick={showActiveTasks}>Active</button>
    </li>
    <li>
      <button type="button" onClick={showCompleteTasks}>Completed</button>
    </li>
  </ul>
);
TasksFilter.defaultProps = {
    showActiveTasks: () => { },
    showCompleteTasks: () => { },
    showAllTasks: () => { },
};
TasksFilter.propTypes = {
    showActiveTasks: PropTypes.func,
    showCompleteTasks: PropTypes.func,
    showAllTasks: PropTypes.func,
};

export default TasksFilter;

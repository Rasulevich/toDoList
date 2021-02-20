import React from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';
import '../main.css';

const Footer = ({
    toDoCount, showActiveTasks, showCompleteTasks, showAllTasks, clearCompleted,filter
}) => (
  <section className="main">
    <footer className="footer">
      <span className="todo-count">
        {toDoCount}
        {' '}
        items left
      </span>
      <TasksFilter
        showActiveTasks={showActiveTasks}
        showCompleteTasks={showCompleteTasks}
        showAllTasks={showAllTasks}
        filter={filter}
      />
      <button
        type="button"
        className="clear-completed"
        onClick={clearCompleted}
      >
        Clear completed
      </button>
    </footer>
  </section>
);

Footer.defaultProps = {
    clearCompleted: () => { },
    toDoCount: 0,
    showActiveTasks: () => { },
    showCompleteTasks: () => { },
    showAllTasks: () => { },


};
Footer.propTypes = {
    toDoCount: PropTypes.number,
    clearCompleted: PropTypes.func,
    showActiveTasks: PropTypes.func,
    showCompleteTasks: PropTypes.func,
    showAllTasks: PropTypes.func,
};

export default Footer;

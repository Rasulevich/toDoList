import React from 'react';
import PropTypes from 'prop-types';
import './TaskList.css';
import '../main.css';
import Task from '../Task/Task';

export default class TaskList extends React.Component {
  static defaultProps = {
    onDeleted: () => {},
    showActiveTasks: () => {},
    onToggleDone: () => {}
  }

  static propTypes = {
    onDeleted: PropTypes.func,
    showActiveTasks: PropTypes.func,
    onToggleDone: PropTypes.func,
  }

  render() {
    const {
      todos, onDeleted, showActiveTasks, onToggleDone,
    } = this.props;

    const elements = todos.map((item) => {
      const { id } = item;
      return (
        <li key={item.id}>
          <Task
            {...item}
            onDeleted={() => onDeleted(id)}
            showActiveTasks={() => showActiveTasks()}
            onToggleDone={() => onToggleDone(id)}
          />
        </li>
      );
    });

    return (
      <section className="main">
        <ul className="todo-list">
          <span>
            {elements}
          </span>
        </ul>
      </section>
    );
  }
}


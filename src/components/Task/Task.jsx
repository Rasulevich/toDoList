/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './Task.css';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

const Task = ({
  label, onDeleted, onToggleDone, done,date
}) => {
  let classNames = 'description ';
  if (done) {
    classNames += 'completed ';
  }
  // const createDate = new Date();
  const result = formatDistanceToNow(
    new Date(date),
  );
  return (
    <div className="view">
      <input className="toggle" type="checkbox" />
      <label>
        <span
          className={classNames}
          onClick={onToggleDone}
          aria-hidden="true"
        >
          {label}
        </span>
        <span className="created">
          created
          {' '}{result}{' '}
          ago
        </span>
      </label>
      <button
        type="button"
        className="icon icon-edit"
      />
      <button
        type="button"
        className="icon icon-destroy"
        onClick={onDeleted}
      />
    </div>
  );
};
Task.defaultProps = {
  label: '',
  onDeleted: () => { },
  onToggleDone: () => { },
  done: false,
};
Task.propTypes = {
  label: PropTypes.string,
  onDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool,
};

export default Task;


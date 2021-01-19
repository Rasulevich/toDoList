/* eslint-disable react/destructuring-assignment */
 import React from 'react';
 import PropTypes from 'prop-types';
 import './NewTaskForm.css';
 import '../todoapp.css';

 export default class NewTaskForm extends React.Component {
  
  static defaultProps = {
        addTask: () => {}
  }

  static propTypes = {
          addTask: PropTypes.func
  }

  state = {
    label:''
  }       

  onLabelChange = (event) => {
        this.setState ( {
                label:event.target.value
        })
  }

  onSubmit = (event) => {
          event.preventDefault();
          this.props.addTask(this.state.label);
          this.setState ({
                  label:''
          })
  }

  render () {
        return (
                <header className="header">
                        <h1>todos</h1>
                        <form onSubmit = {this.onSubmit}>
                          <input className="new-todo" 
                                  placeholder="What needs to be done?" 
                                  onChange = {this.onLabelChange}
                                  value = {this.state.label}/>
                         </form> 
                  </header>
          )
        }
} 


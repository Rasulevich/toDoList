import React from 'react';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import './components/todoapp.css';

export default class App extends React.Component{
  
  maxId = 10;

  state = {
    todoData : [
      this.createNewTask('Drink tea'),
      this.createNewTask('Learn React'),
      this.createNewTask('Sleep'),
    ],
    filter: 'all'
  };

  showActiveTasks = () => {
    this.setState(() => ({
        filter:'active'
      }))
  }

  showAllTasks = () => {
    this.setState(() => ({
        filter:'all'
      }))
  }

  showCompleteTasks = () => {
    this.setState(() => ({
        filter:'done'
      }))
  }
  
  filterItems = (todoData, filter) => {
    if (filter === 'all') {
      return todoData;
    } if (filter === 'active') {
      return todoData.filter((el) => (!el.done));
    } if (filter === 'done') {
      return todoData.filter((el) => el.done);
    }
    return todoData
  }

  
  onToggleDone = (id) => {
    this.setState (({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const oldItem = todoData[idx];
      const newItem = {...oldItem,
                       done:!oldItem.done};
         
      const newData = [
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx +1)
      ];  
      return {
        todoData:newData
      }               
    })
  }

 

  addTask = (text) => {
    const newTask = this.createNewTask(text);

    this.setState(({todoData}) => {
      const newArr = [
        ...todoData,
        newTask
      ]
      return {
        todoData: newArr
      }
    })
  }
  
  clearCompleted = () => {
    this.setState(({todoData}) => {
      const newArr = todoData.filter((el) => el.done === false)
      return {
        todoData: newArr
      }
    })
  }

  deleteTask = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx +1)
      ];
      return {
        todoData: newData
      }
    })
  };
  
  createNewTask (label) {
    return {
      label,
      done:false,
      id:this.maxId++,
      date:new Date()
    }
  }

  render() {
    const { todoData, filter} = this.state;
    const doneCount = todoData.filter((el) => el.done).length;
    const toDoCount = todoData.length - doneCount;
    const visibleItems = this.filterItems(todoData, filter);


    return (
      <div className="todoapp">
        <NewTaskForm addTask = {this.addTask}/>
        <TaskList todos = {visibleItems}
                  onDeleted = {this.deleteTask}
                  onToggleDone = {this.onToggleDone}/>
        <Footer   toDoCount = {toDoCount}
                  filter={filter}
                  showActiveTasks ={this.showActiveTasks}
                  showCompleteTasks = {this.showCompleteTasks}
                  showAllTasks = {this.showAllTasks}
                  clearCompleted = {this.clearCompleted}/>
      </div>
    );
  }
}



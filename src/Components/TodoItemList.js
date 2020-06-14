import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

  // 리렌더링을 할 지 말지 결정 (기본값은 true)
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
  render() {
    const { todos, onToggle, onRemove, onEdit } = this.props;
    
    const todoList = todos.map(
      ({id, title, body, checked}) => (
        <TodoItem
          id = {id}
          title = {title}
          body = {body}
          checked = {checked}
          onToggle = {onToggle}
          onRemove = {onRemove}
          onEdit = {onEdit}
          key = {id}
        />
      )
    )
    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;
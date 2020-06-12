import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {

  // 리렌더링을 할 지 말지 결정 (기본값은 true)
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
  render() {
    /* 
    todos: todo 객체들이 들어있는 배열
    onToggle: 체크박스를 키고 끄는 함수
    onRemove: 아이템을 삭제시키는 함수
    */
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
      ({id, title, body, checked}) => (
        <TodoItem
          id = {id}
          title = {title}
          body = {body}
          checked = {checked}
          onToggle = {onToggle}
          onRemove = {onRemove}
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
import React, { Component } from 'react';
import TodoListTemplate from './Components/TodoListTemplate';
import TodoItemList from './Components/TodoItemList';

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    modal: false,
    mode: '',
    editing: {
      id: 0,
      isEdit: false,
      title: '',
      body: ''
    },
    todos: [
      { id: 0, title: ' 리액트 소개', body: '', checked: false },
      { id: 1, title: ' 리액트 소개', body: '', checked: true },
      { id: 2, title: ' 리액트 소개', body: '', checked: false }
    ]
  }
  /* 모달 창 변경 */
  handleMode = (mode, editing) => {
    console.log(mode);
    if(mode === 'create') {
      this.setState({modal: true});
    } 
    else if(mode === 'edit') {
      this.setState({
        modal: true,
        editing: editing
      })
    }
    else { // 초기화 
      this.setState({
        modal: false,
        editing: {
          id: 0,
          isEdit: false,
          title: '',
          body: ''
        }
      });
    }
  }

  handleCreate = (data) => {
    const { todos } = this.state;

    this.setState({
      // concat 사용하여 배열 추가 
      todos: todos.concat({
        id: this.id++,
        checked: false,
        ...data
      })
    });
    this.handleMode('close');
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id 가지고 몇번째 아이템인지 찾기
    const idx = todos.findIndex(todo => todo.id === id);
    const selected = todos[idx]; // 선택할 객체
    const nextTodos = [...todos]; // 배열 복사

    // 기존의 값 복사하고, checked 값 덮어쓰기
    nextTodos[idx] = {
      ...selected,
      checked: !selected.checked
    };
    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleEdit = (id) => {
    const { todos } = this.state;
    // 수정할 객체
    const selected = {
      id: id,
      isEdit: true,
      title: todos[id].title,
      body: todos[id].body
    }
    this.handleMode('edit', selected);
  }

  handleUpdate = (id, data) => {
    const { todos } = this.state;

    this.setState({
      todos: todos.map(
        prev => prev.id === id ? { ...prev, ...data } : prev)
    });
    this.handleMode('close');
  }

  render() {
    const { todos, modal, editing } = this.state;
    const {
      handleCreate,
      handleToggle,
      handleRemove,
      handleUpdate,
      handleEdit,
      handleMode
    } = this;

    return (
      <TodoListTemplate  
        modal = {modal}
        editing = {editing}
        onCreate = {handleCreate}
        onHandleMode = {handleMode}
        onUpdate = {handleUpdate}
      >
        <TodoItemList 
        todos = {todos}
        onToggle = {handleToggle} 
        onRemove = {handleRemove}
        onEdit = {handleEdit}/>
      </TodoListTemplate>
    );
  }
}

export default App;

import React, { Component } from 'react';
import TodoListTemplate from './Components/TodoListTemplate';
import TodoListTemplate1 from './Components/TodoListTemplate1';
import Form from './Components/Form';
import TodoItemList from './Components/TodoItemList';

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: {
      title: '할 일 목록 입력 고',
      body: '잘 나오나?'
    },
    modal: false,
    isEdit: false,
    todos: [
      { id: 0, title: ' 리액트 소개', body: '', checked: false },
      { id: 1, title: ' 리액트 소개', body: '', checked: true },
      { id: 2, title: ' 리액트 소개', body: '', checked: false }
    ]
  }
  /* 모달 창 켜고 닫기 */
  handleModal = () => {
      this.setState({
          modal: !this.state.modal,
          isEdit: false
      });
  };
  /* 모달 창 입력 상태 변화 */
  handleChange = (e) => {
    console.log('움직임 !');
    const { input } = this.state;

    input[e.target.name] = e.target.value;
    this.setState(input);
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: {
        title: '',
        body: ''
      },
      // concat 사용하여 배열 추가 
      todos: todos.concat({
        id: this.id++,
        title: input.title,
        body: input.body,
        checked: false
      }),
      modal: false // 창 닫기
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 enter 면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
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

  handleUpdate = (id) => {
    const { todos } = this.state;

    this.setState({
      modal: !this.state.modal,
      isEdit: !this.state.isEdit,
      input: {
        title: todos[id].title,
        body: todos[id].body
      }
    });
  }

  handleCheck = (id, data) => {
    const { todos } = this.state;

    this.setState({
      modal: !this.state.modal,
      isEdit: !this.state.isEdit,
      todos: todos.map(
        prev => id === prev.id ? { ...prev, ...data } : prev
      )
    });
  }

  render() {
    const { input, todos, modal, isEdit } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleUpdate,
      handleCheck,
      handleModal
    } = this;

    return (
      <TodoListTemplate  modal = {modal} onHandleModal = {handleModal}
      form={(
        <Form
          todos = {todos}
          value = {input}
          modal = {modal}
          isEdit = {isEdit}
          onKeyPress = {handleKeyPress}
          onChange = {handleChange}
          onCreate = {handleCreate}
          onHandleModal = {handleModal}
          onCheck = {handleCheck}
        />)}>
        <TodoItemList 
        todos = {todos}
        onToggle = {handleToggle} 
        onRemove = {handleRemove}
        onUpdate = {handleUpdate}/>
      </TodoListTemplate>
    );
  }
}

export default App;

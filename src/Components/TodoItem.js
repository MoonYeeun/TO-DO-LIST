import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked !== nextProps.checked;
  }
  render() {
    /*
    text: todo 내용
    checked: 체크박스 상태
    id: todo 의 고유 아이디
    onToggle: 체크박스를 키고 끄는 함수
    onRemove: 아이템을 삭제시키는 함수
    */
    const { id, title, body, checked, onToggle, onRemove } = this.props;
    const content = (
      <div>
        <div>{title}</div>
        <div>{body}</div>
      </div>
    )
    console.log(id);

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // 이벤트의 확산을 멈춰서 onToggle 이 실행되지 않도록 함
          onRemove(id)}
        }>&times;</div>
        <div className={`todo-text ${checked && 'checked'}`}>
          <div>{content}</div>
        </div>
        {
          checked && (<div className="check-mark">✓</div>)
        }
        <div className="update">&#9998;</div> 
      </div>
    );
  }
}

export default TodoItem;
import React from 'react';
import './TodoModal.css';

const TodoModal = ({ value, onChange, onClose, onCreate }) => {
    return (
        <div className="TodoModal">
            <div className="wrapper">
                <div className="header">
                    <h3>할 일 목록</h3>
                    <button className="button" onClick={onClose}>x</button>
                </div>
                <div className="content">
                    <p>Title</p>
                    <input className="title" value = {value} onChange = {onChange}></input>
                    <p>Description</p>
                    <textarea className="body"></textarea>
                </div>
                <button className="submit" onClick={onCreate}>add+</button>
            </div>
        </div>
    )
}

export default TodoModal;
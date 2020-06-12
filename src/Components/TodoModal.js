import React, { Component } from 'react';
import './TodoModal.css';

class TodoModal extends Component {
    render() {
        const { value, onChange, onClose, onCreate } = this.props;
        
        return (
            <div className="TodoModal">
                <form className="wrapper" onSubmit={onCreate}>
                    <div className="header">
                        <h3>할 일 목록</h3>
                        <button className="button" onClick={() => onClose(false)}>&times;</button>
                    </div>
                    <div className="content">
                        <p>Title</p>
                        <input className="title" name="title" value = {value.title} onChange = {onChange}></input>
                        <p>Description</p>
                        <textarea className="body" name="body" value = {value.body} onChange = {onChange}></textarea>
                    </div>
                    <button className="submit" type="submit">add+</button>
                </form>
            </div>
        )
    }
}

export default TodoModal;
import React, { Component } from 'react';
import './TodoModal.css';

class TodoModal extends Component {
    state = {
        isEdit: this.props.editing.isEdit, 
        title: this.props.editing.title,
        body: this.props.editing.body
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = () => {
        const { onCreate } = this.props;

        const data = {
            title: this.state.title,
            body: this.state.body
        }
        onCreate(data);
    }

    handleUpdate = () => {
        const { editing, onUpdate } = this.props;

        const data = {
            title: this.state.title,
            body: this.state.body
        }
        onUpdate(editing.id, data);
    }

    render() {
        return (
            <div className="TodoModal">
                <form className="wrapper" onSubmit={this.handleSubmit}>
                    <div className="header">
                        <h3>할 일 목록</h3>
                        <button className="button" onClick={() => this.props.onClose('close')}>&times;</button>
                    </div>
                    <div className="content">
                        <p>Title</p>
                        <input className="title" name="title" value = {this.state.title} onChange = {this.handleChange}></input>
                        <p>Description</p>
                        <textarea className="body" name="body" value = {this.state.body} onChange = {this.handleChange}></textarea>
                    </div>
                    {
                        this.state.isEdit === false ? <button className="submit" type="submit">add+</button>
                        : <button className="submit" onClick={this.handleUpdate}>ok</button>
                    }   
                </form>
            </div>
        )
    }
}

export default TodoModal;
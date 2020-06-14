import React, { Component } from 'react';
import Card from './Card';
import './TodoListTemplate.css';
import TodoModal from './TodoModal';
import Modal from './Modal';

class TodoListTemplate extends Component {
    render() {
        const { children, modal, onHandleMode } = this.props;

        return (
            <main className="todo-list-template">
                <Card 
                    title = "TO DO"
                    list = {children}>
                    <div className="create-button" onClick={() => onHandleMode('create')}>+ Add another card</div>
                    {
                        modal && (
                            <Modal>
                                <TodoModal 
                                isEdit={this.props.isEdit}
                                editing ={this.props.editing}
                                onClose={this.props.onHandleMode}
                                onUpdate={this.props.onUpdate}
                                onCreate={this.props.onCreate}></TodoModal>
                            </Modal>
                        )
                    }
                </Card>
                <Card 
                    title = "DOING"
                    list = {children}/>

                <Card 
                    title = "DONE"
                    children = {children}
                />
            </main>
        );
    }
}
export default TodoListTemplate;
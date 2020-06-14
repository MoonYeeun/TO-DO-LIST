import React, { Component } from 'react';
import Card from './Card';
import './TodoListTemplate.css';

class TodoListTemplate1 extends Component {
    render() {
        const { todos, form, children } = this.props;
        return (
            <main className="todo-list-template">
                <Card 
                    title = "TO DO"
                    children = {children}
                    
                />
                <Card 
                    title = "DOING"
                    children = {children}
                    form = {form}/>

                <Card 
                    title = "DONE"
                    children = {children}
                    form = {form}/>
            </main>
        );
    }
}
export default TodoListTemplate1;
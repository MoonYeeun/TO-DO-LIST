import React, { Component } from 'react';
import './TodoListTemplate.css';

class Card extends Component {
    render() {
        const { title, list, children } = this.props;

        return (
            <div className = "Card">
                <div className="Todo">
                    {title}
                </div>
                <section className="todos-wrapper">
                    { list }
                </section>
                <section className="form-wrapper">
                    { children }
                </section>
            </div>
        )
    }
}

export default Card;
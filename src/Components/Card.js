import React from 'react';
import './TodoListTemplate.css';

const Card = ({title, children, form}) => {
    return (
        <div className = "Card">
            <div className="Todo">
                {title}
            </div>
            <section className="todos-wrapper">
                { children }
            </section>
            <section className="form-wrapper">
                {form}
            </section>
        </div>
    )
};
export default Card;
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
                {/* <section className="form-wrapper">
                    <div className="create-button" onClick={() => onHandleModal()}>+ Add another card</div>
                    {
                        modal && (
                            <Modal>
                                <TodoModal 
                                todos ={this.props.todos}
                                value={this.props.value}
                                isEdit={this.props.isEdit}
                                onChange={this.props.onChange}
                                onClose={this.props.onHandleModal}
                                onCheck={this.props.onCheck}
                                onCreate={this.props.onCreate}></TodoModal>
                            </Modal>
                        )
                    }
                </section> */}
            </div>
        )
    }
}

export default Card;
import React, { Component } from 'react';
import './Form.css';
import TodoModal from './TodoModal';
import Modal from './Modal';

class Form extends Component {
    render () {
        const { 
            modal,
            onHandleModal
        } = this.props;

        return (
            <div className="form">
                {/* <input value = {value} onChange = {onChange} onKeyPress = {onKeyPress}/> */}
                {/* <div className="create-button" onClick={onCreate}></div> */}
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
            </div>
        );
    }
}

export default Form;
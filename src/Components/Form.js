import React, { Component } from 'react';
import './Form.css';
import TodoModal from './TodoModal';
import Modal from './Modal';

class Form extends Component {
    render () {
        const { 
            value, 
            modal, 
            onChange, 
            onCreate, 
            onHandleModal
        } = this.props;

        return (
            <div className="form">
                {/* <input value = {value} onChange = {onChange} onKeyPress = {onKeyPress}/> */}
                {/* <div className="create-button" onClick={onCreate}></div> */}
                <div className="create-button" onClick={() => onHandleModal(true)}>+ Add another card</div>
                {
                    modal && (
                        <Modal>
                            <TodoModal 
                            value={value}
                            onChange={onChange}
                            onClose={onHandleModal}
                            onCreate={onCreate}></TodoModal>
                        </Modal>
                    )
                }
            </div>
        );
    }
}

export default Form;
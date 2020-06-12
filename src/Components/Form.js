import React, { Component } from 'react';
import './Form.css';
import TodoModal from './TodoModal';
import Modal from './Modal';

class Form extends Component {
    state = {
        modal: false
    };

    handleOpenModal = () => {
        this.setState({
            modal: true
        });
    };

    handleCloseModal = () => {
        this.setState({
            modal: false
        });
    };

    render () {
        const {value, onChange, onCreate, onKeyPress} = this.props;

        return (
            <div className="form">
                {/* <input value = {value} onChange = {onChange} onKeyPress = {onKeyPress}/> */}
                {/* <div className="create-button" onClick={onCreate}></div> */}
                <div className="create-button" onClick={this.handleOpenModal}>+</div>
                {
                    this.state.modal && (
                        <Modal>
                            <TodoModal 
                            value={value}
                            onChange={onChange}
                            onClose={this.handleCloseModal}
                            onCreate={onCreate}></TodoModal>
                        </Modal>
                    )
                }
            </div>
        );
    }
}

export default Form;
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modal');

    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;

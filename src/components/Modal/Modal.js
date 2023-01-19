import React from 'react';

import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <div
      className={
        props.active ? `${styles.modal} ${styles.active}` : `${styles.modal}`
      }
      onClick={() => props.setActive(false)}
    >
      <div
        className={
          props.active
            ? `${styles.modal__content} ${styles.active}`
            : `${styles.modal__content}`
        }
        onClick={(event) => event.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Modal;

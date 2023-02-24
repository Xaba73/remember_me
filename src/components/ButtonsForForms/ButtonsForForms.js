import Button from '@mui/material/Button';
import styles from './ButtonsForForms.module.css';

const ButtonsForForms = (props) => {
  const cancelButtonStyle = {
    color: 'black',
    border: '1px solid rgba(0, 0, 0, 0.3)',
    textTransform: 'none',
    borderRadius: '10px',
  };

  const submitButtonStyle = {
    marginLeft: 'auto',
    textTransform: 'none',
    borderRadius: '10px',
  };

  return (
    <div className={styles.form__buttons__wrapper}>
      <Button
        variant='outlined'
        aria-label='close modal'
        sx={cancelButtonStyle}
        onClick={props.closeModal}
      >
        Отмена
      </Button>
      <Button
        variant='contained'
        type='submit'
        aria-label='confirm change'
        sx={submitButtonStyle}
      >
        {props.submitButtonText}
      </Button>
    </div>
  );
};

export default ButtonsForForms;

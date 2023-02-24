import { TextField } from '@mui/material';
import styles from './InputForForm.module.css';
const InputForForm = (props) => {
  return (
    <div className={styles.form__input__wrapper}>
      <TextField
        id={props.name}
        label={props.labelDescription}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        variant='outlined'
        error={props.error}
        helperText={props.helperText}
        sx={{ margin: '15px 0', width: '100%', display: 'flex' }}
      />
    </div>
  );
};

export default InputForForm;

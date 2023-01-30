import { TextField } from '@mui/material';
import styles from './InputForForm.module.css';
const InputForForm = (props) => {
  return (
    <TextField
      id={props.name}
      label={props.labelDescription}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      variant='outlined'
      className={styles.textField}
    />
  );
};

export default InputForForm;

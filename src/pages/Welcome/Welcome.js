import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import StartIcon from '@mui/icons-material/Start';

const Welcome = () => {
  const buttonStyle = {
    fontSize: 28,
    color: '#252340',
    textTransform: 'none',
    border: '1px solid #252340',
    paddingRight: '30px',
  };
  return (
    <div className={styles.decorationWrapper}>
      <h1 className={styles.main_title}>
        Remember<span className={styles.main_title__decoration}>.me</span>
      </h1>
      <article className={styles.content}>
        Это web приложение для создания <br />и запоминания флэш карточек со
        словами
      </article>
      <Link to='/words' className={styles.link}>
        <Button variant='outlined' endIcon={<StartIcon />} sx={buttonStyle}>
          Let's start
        </Button>
      </Link>
    </div>
  );
};

export default Welcome;

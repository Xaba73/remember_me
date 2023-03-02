import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import StartIcon from '@mui/icons-material/Start';

const Welcome = () => {
  const buttonStyle = {
    fontSize: 48,
    textTransform: 'none',
    paddingRight: '30px',
    fontFamily: `'Roboto Condensed', sans-serif;`,
    backgroundColor: `#6733ab`,
  };
  return (
    <div className={styles.decorationWrapper}>
      <h1 className={styles.main_title}>
        Remember<span className={styles.main_title__decoration}>.me</span>
      </h1>
      <article className={styles.content}>
        Создавай и запоминай свои <br></br>флэш карточки!
      </article>
      <Link to='/words' className={styles.link}>
        <Button variant='contained' endIcon={<StartIcon />} sx={buttonStyle}>
          Let's start
        </Button>
      </Link>
    </div>
  );
};

export default Welcome;

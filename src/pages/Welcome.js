import styles from './Welcome.module.css';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
      <h1 className={styles}>Remember ME</h1>
      <Link to='/words' className={styles.link}>
        LET'S START <span>&#129042;</span>
      </Link>
    </>
  );
};

export default Welcome;

import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className={styles.head_wrapper}>
      <Link to='/' className={styles.main_page_link}>
        Remember ME
      </Link>
      <Link className={styles.head_menu_link} to={props.link}>
        {props.linkDescription}
      </Link>
    </div>
  );
};

export default Header;

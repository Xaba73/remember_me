import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
const Header = (props) => {
  const buttonStyle = {
    color: 'rgba(0, 32, 51, 0.8)',
    textDecoration: 'none',
    textTransform: 'none',
    fontFamily: `'Libre Baskerville', serif`,
    fontSize: '1.3em',
    cursor: 'pointer',
    fontWeight: '500',
  };
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
  const headerStickyHandler = () => {
    if (window.scrollY >= 60) {
      setIsHeaderSticky(true);
    } else {
      setIsHeaderSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerStickyHandler);
    return () => {
      window.removeEventListener('scroll', headerStickyHandler);
    };
  }, []);

  return (
    <div
      className={
        isHeaderSticky
          ? `${styles.head_wrapper} ${styles.sticky}`
          : styles.head_wrapper
      }
    >
      <Link to='/' className={styles.main_page_link}>
        Remember
        <span className={styles.main_page_link_logo_decoration}>.me</span>
      </Link>
      <Link className={styles.head_menu_link} to={props.link}>
        {props.linkDescription}
      </Link>
      {isHeaderSticky && props.showAddNewCardButton && (
        <div className={styles.button_wrapper}>
          <Button
            aria-label='add new card'
            sx={buttonStyle}
            onClick={props.openModalAddNewCard}
          >
            Добавить карточку
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;

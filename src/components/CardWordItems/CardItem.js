import styles from './CardItem.module.css';

const CardItem = (props) => {
  return (
    <form className={styles.container}>
      <p className={styles.original}>{props.russian}</p>
      <p className={styles.translation}>{props.english}</p>
    </form>
  );
};

export default CardItem;

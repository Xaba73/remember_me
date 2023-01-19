import styles from './CardItem.module.css';

const CardItem = (props) => {
  const onEditHandler = (event) => {
    event.preventDefault();
    let card = {
      russian: props.russian,
      english: props.english,
      id: props.id,
    };
    props.onIsEditingCardActive(true);
    props.onGetDateForEditionModal(card);
  };
  return (
    <form className={styles.container} onSubmit={onEditHandler}>
      <p className={styles.original}>{props.russian}</p>
      <p className={styles.translation}>{props.english}</p>
      <button type='submit'>Edit</button>
    </form>
  );
};

export default CardItem;

const InputForForm = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.labelDescription}</label>
      <input
        type='text'
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputForForm;

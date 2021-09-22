function Suggestions(props) {
    console.log("suggestions rendered", props.suggestedList)

    return (
      <datalist
      id={props.datalistId}
      >
        {props.suggestedList.map((item) => {
          return (
            <option
              key={item[props.columnName]}
              value={item[props.columnName]}
              id={item[props.columnName]}
            >
            </option>
          );
        })}
      </datalist>
    );
  }

  export { Suggestions };


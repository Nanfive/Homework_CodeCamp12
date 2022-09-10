function List(props) {
  return (
    <li>
      <a href={props.path}> {props.title}</a>
    </li>
  );
}

export default List;

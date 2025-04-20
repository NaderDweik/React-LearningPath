import PropTypes from 'prop-types';

function List(props) {
  const category = props.category;
  const fruits = props.items;

  const listItems = fruits.map(fruit => (
    <li key={fruit.id}>
      {fruit.name} &nbsp;
      <b>{fruit.calories}</b> calories
    </li>
  ));

  return (
    <div>
      <h2 className="list-catgorie">{category}</h2>
      <ol className="list-items">{listItems}</ol>
    </div>
  );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
      calories: PropTypes.number,
    })
  ),
};

List.defaultProps = {
  items: [],
  category: "Category",
};

export default List;

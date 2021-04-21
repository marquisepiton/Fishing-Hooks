function Items(props) {
  const handleItemAdd = () => {};

  console.log(props.itemData);
  return props.itemData.map((item, index) => {
    return (
      <div key={index}>
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={handleItemAdd}>Add</button>
      </div>
    );
  });
}

export default Items;

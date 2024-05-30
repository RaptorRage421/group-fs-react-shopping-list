function ShoppingItem(props) {

    return (
      <>
        <h2>All Creatures</h2>
        <ul>
          {

            //shoppingItem may be named something else 
            //if the prop is named something else
            props.shoppingItem.map((shoppingItem) => (
              <li key={shoppingItem.id}>
                The {shoppingItem.name} originated in {shoppingItem.origin}.
              </li>
            ))
          }
        </ul>
      </>
    );
  
}
export default ShoppingItem ;
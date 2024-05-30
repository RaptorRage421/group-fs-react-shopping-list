function ShoppingItem({ shoppingItem }) {


    return (
        <li>
             {shoppingItem.name} {shoppingItem.quantity} {shoppingItem.unit}{shoppingItem.purchased}
        </li>
    );

}
export default ShoppingItem;
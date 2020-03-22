import React from 'react';

//STEP 1
/*export default function ShoppingItem(props) {
  return (
    <li>
      <h2 style={{
        textDecoration: props.item.checked ? 'line-through' : null,
      }}>
        {props.item.name}
      </h2>
      <button type='button'>check</button>
      <button type='button'>delete</button>
    </li>
  )
}

ShoppingItem.defaultProps = {
  item: {}
}*/


//STEP 2
/*function ShoppingItem(props) {
    return (
      <li>
        <h2 style={{
          textDecoration: props.item.checked ? 'line-through' : null,
        }}>
          {props.item.name}
        </h2>
        <button
          onClick={props.onCheckItem}
          type='button'>
          check
        </button>
        <button
          onClick={props.onDeleteItem}
          type='button'>
          delete
        </button>
      </li>
    )
  }
  
  ShoppingItem.defaultProps = {
    item: {}
  }*/


  //STEP 3 - Let's pass the item into the callback prop with arrow functions.
export default function ShoppingItem(props) {
    return (
      <li>
        <h2 style={{
          textDecoration: props.item.checked ? 'line-through' : null,
        }}>
          {props.item.name}
        </h2>
        <button
            onClick={() => props.onCheckItem(props.item)}
            type='button'>
            check
        </button>
        <button
            onClick={() => props.onDeleteItem(props.item)}
            type='button'>
            delete
        </button>
      </li>
    )
  }
  
  ShoppingItem.defaultProps = {
    item: {}
  }

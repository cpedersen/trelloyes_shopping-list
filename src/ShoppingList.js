import React from 'react'
import ShoppingItem from './ShoppingItem'

//STEP 1
/*export default function ShoppingList(props) {
  return (
    <ul>
      {props.items.map((item, i) =>
        <ShoppingItem
          key={i}
          item={item}
        />
      )}
    </ul>
  )
}

ShoppingList.defaultProps = {
  items: []
}*/

//STEP 2
export default function ShoppingList(props) {
    return (
        <ul>
        {props.items.map((item, i) =>
          <ShoppingItem
            key={i}
            item={item}
            onDeleteItem={props.onDeleteItem}
            onCheckItem={props.onCheckItem}
          />
        )}
      </ul>
    )
  }
  
  ShoppingList.defaultProps = {
    items: []
  }
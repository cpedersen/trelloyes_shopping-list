import React from 'react';

//STEP 1
/*export default class AddItemForm extends React.Component {
    render() {
      return (
        <form>
          <input
            type='text'
            placeholder='carrots'
            aria-label='Shopping list item'
          />
          <button type='submit'>Add Item</button>
        </form>
      )
    }
  }*/


  //STEP 2
  /*export default class AddItemForm extends React.Component {
    render() {
      return (
        <form>
          <input
            type='text'
            placeholder='carrots'
            aria-label='Shopping list item'
          />
          <button type='submit'>Add Item</button>
        </form>
      )
    }
  }*/


    //STEP 3
  export default class AddItemForm extends React.Component {
    onSubmitForm = (e) => {
      e.preventDefault()
      // e.target['inputName'] references `<input name='inputName' />`
      this.props.onAddItem(e.target.itemToAdd.value)
    }
    render() {
      /* Wire up the form to add items in App state... */
      return (
        <form onSubmit={this.onSubmitForm}>
          <input
            name='itemToAdd'
            type='text'
            placeholder='carrots'
            aria-label='Shopping list item'
          />
          <button type='submit'>Add Item</button>
        </form>
      )
    }
  }
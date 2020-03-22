import React, { Component } from 'react';
import List from './List';
import './App.css';
import AddItemForm from './AddItemForm';
import ShoppingList from './ShoppingList';

//STEP 1
/*class App extends React.Component {
  state = {
    shoppingItems: [
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList items={this.state.shoppingItems} />
          </section>
        </main>
      </>
    )
  }
}*/


//STEP 2
/*class App extends React.Component {
  state = {
    shoppingItems: [
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleDeleteItem(){
    console.log('handle delete item called')
  }
  handleCheckItem(){
    console.log('handle check item called')
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    )
  }
}*/


//STEP 3
/*class App extends React.Component {
  state = {
    shoppingItems: [
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleDeleteItem(item){
    console.log('handle delete item called', { item })
  }
  handleCheckItem(item){
    console.log('handle check item called', { item })
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    )
  }
}*/


//STEP 4
/*class App extends React.Component {
  state = {
    shoppingItems: [
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }
  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    )
  }
}*/


//STEP 5 - add empty handleAddItem
/*class App extends React.Component {
  state = {
    shoppingItems: [
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleAddItem = (itemName) => {
    console.log('handle add item', { itemName })
  }

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }
  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm 
              onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    )
  }
}*/


//STEP 6 - The final step is to add the new item to the state
class App extends React.Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: 'apples', checked: false },
      { name: 'oranges', checked: true },
      { name: 'bread', checked: false },
    ]
  };

  handleAddItem = (itemName) => {
    console.log('handle add item', { itemName })
    const newItems = [
      ...this.state.shoppingItems,
      { name: itemName, checked: false }
    ]
    this.setState({
      shoppingItems: newItems
    })
  }

  handleDeleteItem = (item) => {
    const newItems = this.state.shoppingItems.filter(itm => itm !== item)
    this.setState({
      shoppingItems: newItems
    })
  }
  handleCheckItem = (item) => {
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked
      }
      return itm
    })
    this.setState({
      shoppingItems: newItems
    })
  }

  render() {
    return (
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm 
              onAddItem={this.handleAddItem}
            />
          </section>
          <section>
            <ShoppingList
              items={this.state.shoppingItems}
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    )
  }
}

export default App;

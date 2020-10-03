import React, { Component } from 'react';
import classes from './App.module.css';
import ListItem from './ListItem';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
      currentItems : {
        text : '',
        key:''
      }
    }
  }

  handleInput = (e) => {
    this.setState({
      currentItems : {
        text : e.target.value,
        key : Date.now()
      }
    })
  }

  addItem = (e) => {
    e.preventDefault();
    const newItem = this.state.currentItems;
    console.log(newItem);

    if(newItem.text!==''){
      const items = [...this.state.items,newItem];
      this.setState({
        items,
        currentItems : {
          text : '',
          key :''
        }
      })
    }
  }

  deleteItem = (key) => {
    const filterItems = this.state.items.filter(item => item.key!==key);
    this.setState({items : filterItems});
  }

  setUpdate = (text, key) => {
    const items = this.state.items;
    items.map(item => {
      if(item.key === key){
        item.text = text;
      }
    });
    this.setState({ items })
  }
  render() { 
    return (
      <div className="App"> 
        <div className={classes.todoWrapper}>
          <form className={classes.todo} onSubmit={this.addItem}>
            <input className={classes.text} value={this.state.currentItems.text} onChange={this.handleInput} type="text" placeholder="Enter Task"/>
            <button type="submit" className={classes.btn}>Add</button>
          </form>
          <ListItem items={this.state.items} deleteItem={this.deleteItem} setUpdate={this.setUpdate}/>
        </div>
      </div>
     );
  }
} 
 
export default App;
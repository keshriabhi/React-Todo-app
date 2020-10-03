import React, { Component } from 'react'; 
import classes from './ListItem.module.css';
import FlipMove from 'react-flip-move';
const ListItem = (props) =>{
    const items = props.items;
    const listItem = items.map(item => {
        return <div className={classes.list} key={item.key}><p><input type="text" value={item.text} id={item.key} onChange={(e) => props.setUpdate(e.target.value, item.key)}/><span onClick={() => props.deleteItem(item.key)} ><i class="fas fa-trash"></i></span></p></div>
    })
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">{listItem}</FlipMove></div>
    );
} 

export default ListItem; 
import React, { Component } from 'react';

import classes from './Dropdown.css';

export default class Dropdown extends Component {
    
    render() {
        return(
            <div className={ classes['dropdown'] }>
                {
                    this.props.items.map((item, key) => (
                    <span className={ classes['dropdown-items']}  onClick={() => this.props.changed(item.name)} key={item.id}> <p> {item.name} </p> </span>
                    ))
                }
            </div>
        );
    }
}
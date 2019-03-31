import React, { Component } from 'react';

import classes from './InputBox.css';

export default class InputBox extends Component {
    render() {
        return(
            <div className={ classes['container'] } >
                <input type='text' className={ classes['input-box'] } placeholder="Search by name" onChange={this.props.changed} />
            </div>
        );
    }
}
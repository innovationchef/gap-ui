import React, { Component } from 'react';

import classes from './SelectionBox.css';
import Dropdown from '../Dropdown/Dropdown';

export default class SelectionBox extends Component {

    dropdown = () => {
        return(
            this.props.buttonSelectionState ?
            <Dropdown items={this.props.items} changed={this.props.changeButtonText} />: null
        );
    };

    render() {
        return(
            <div className={ classes['container'] } >
                <button 
                    className={this.props.buttonSelectionState ? 
                        [classes['button'], classes['button-active']].join(' ') : 
                        classes['button']}
                    onClick={this.props.changeButtonSelectionState}>
                    <p> {this.props.selectedItem} </p>
                </button>
                {this.dropdown()}
            </div>
        );
    }
}
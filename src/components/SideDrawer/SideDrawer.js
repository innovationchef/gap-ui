import React from 'react';

import classes from './SideDrawer.css';
import Backdrop from '../Backdrop/Backdrop';
import Wrapper from '../../hoc/Wrapper';

const sideDrawer = (props) => {

    let attachedClasses = [classes['sidedrawer'], classes['close']]
    if(props.open) {
        attachedClasses = [classes['sidedrawer'], classes['open']]
    }

    return (
        <Wrapper>
            <Backdrop show={ props.open } clicked={ props.closed }/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <ul className={classes['navitems']}>
                        <li className={classes['navitem']}>HOME</li>
                        <li className={classes['navitem']}>ABOUT US</li>
                        <li className={classes['navitem']}>MP REPORT</li>
                        <li className={classes['navitem']}>PARLIAMENT BILLS</li>
                        <li className={classes['navitem']}>BLOGS</li>
                    </ul>
                </nav>
            </div>
        </Wrapper>
    );
};

export default sideDrawer;

import React from 'react';

import classes from './NavigationItems.css';

const navigationItems = () => (
    <div>
        <ul className={classes['navitems']}>
            <li className={classes['navitem']}>HOME</li>
            <li className={classes['navitem']}>ABOUT US</li>
            <li className={classes['navitem']}>MP REPORT</li>
            <li className={classes['navitem']}>PARLIAMENT BILLS</li>
            <li className={classes['navitem']}>BLOGS</li>
        </ul>
    </div>
);

export default navigationItems;
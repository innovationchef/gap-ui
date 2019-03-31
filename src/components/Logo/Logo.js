import React from 'react';

import projectLogo from '../../assets/capitol-building.svg';
import classes from './Logo.css';

const logo = (props) => (
    <div className={ classes['logo'] }>
        <img src={projectLogo} alt="G.A.P" />
    </div>
);

export default logo;
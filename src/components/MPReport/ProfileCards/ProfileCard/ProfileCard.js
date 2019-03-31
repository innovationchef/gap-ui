import React from 'react';

import classes from './ProfileCard.css';
import { FaStar } from 'react-icons/fa';
import { IconContext } from "react-icons";

const profileCard = (props) => (
    <div className={ classes['container'] }>
        <img src={props.image} className={ classes['profile-pic'] } alt='profile-pic' />
        <div className={ classes['description'] }>
            <div className={ classes['content'] }>
                <h2>{props.name}</h2>
                <p>State: <strong> {props.state} </strong> </p>
                <p>Constituency: <strong> {props.constituency} </strong> </p>
            </div>
            <div className={ classes['logo'] }>
                <img src={props.logo} className={ classes['party-logo'] } alt='logo'  />
            </div>
        </div>
        <div className={ classes['footer'] }>
            <IconContext.Provider value={{ color: "#F2E0C2", className: "global-class-name", size: '16px', style: { padding: '1px' } }}>
                {  
                    [...Array(props.stars)].map((e, i) => <FaStar key={i} />)
                }
            </IconContext.Provider>
        </div>
        <div className={ classes['overlay'] }>
        </div>
    </div>
);

export default profileCard;
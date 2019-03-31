import React from 'react';

import classes from './ResultCard.css';
import { FaBusinessTime } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';
import { FaStickyNote } from 'react-icons/fa';
import { FaQuestion } from 'react-icons/fa';
import { IconContext } from "react-icons";

let cardColor = (type) => {
    if(type==='attendence') {
        return([classes['container'],classes['green']].join(' '))
    }
    if(type==='debates') {
        return([classes['container'],classes['blue']].join(' '))
    }
    if(type==='bills') {
        return([classes['container'],classes['purple']].join(' '))
    }
    if(type==='questions') {
        return([classes['container'],classes['orange']].join(' '))
    }
}

let iconColor = (type) => {
    if(type==='attendence') {
        return(<IconContext.Provider value={{ color: "#00DBB7", className: "global-class-name", size: '40px' }}>
            <FaBusinessTime />
        </IconContext.Provider>)
    }
    if(type==='debates') {
        return(<IconContext.Provider value={{ color: "#00ACEB", className: "global-class-name", size: '40px' }}>
            <FaComment />
        </IconContext.Provider>)
    }
    if(type==='bills') {
        return(<IconContext.Provider value={{ color: "#6772E5", className: "global-class-name", size: '40px' }}>
            <FaStickyNote />
        </IconContext.Provider>)
    }
    if(type==='questions') {
        return(<IconContext.Provider value={{ color: "#FF5C6C", className: "global-class-name", size: '40px' }}>
            <FaQuestion />
        </IconContext.Provider>)
    }
}

const resutlCard = (props) => (
    <div className={ cardColor(props.type) }>
        <div className={ classes['content-left'] }>
            <h2> {props.figure} </h2>
            <p> {props.parameter} </p>
        </div>
        
        <div className={ classes['content-right'] }>
            {iconColor(props.type)}
        </div>    
    </div>
);

export default resutlCard;
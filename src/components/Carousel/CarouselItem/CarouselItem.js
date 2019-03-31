import React from 'react';

import classes from './CarouselItem.css';

const carouselItem = (props) => (
    <div 
      className={ [
          classes['container'], 
          classes[props.pattern], 
          classes[props.overlay], 
          classes['animation'], 
          classes[props.direction]].join(' ')}>      
    </div>
);

export default carouselItem;
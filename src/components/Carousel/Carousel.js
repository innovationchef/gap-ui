import React, { Component } from 'react';

import classes from './Carousel.css';
import Wrapper from '../../hoc/Wrapper';
import CarouselItem from './CarouselItem/CarouselItem';


export default class Carousel extends Component {
  state = {
    index: true
  }

  carouselBody = () => (
    this.state.index ? 
    <CarouselItem direction='normal-direction' pattern='pattern1' overlay='overlay1' /> :
    <CarouselItem direction='reverse-direction' pattern='pattern1' overlay='overlay1' />
  );
  
  render() {
    return (
      <Wrapper>
        <div className={ classes['base-container']}>
            {
              this.state.index ? 
              <CarouselItem direction='normal-direction' pattern='pattern1' overlay='overlay1' /> :
              null
            }
        </div>
      </Wrapper>
    );
  }
}
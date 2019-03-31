import React, { Component } from 'react';

import classes from './PageHeader.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { FaBars } from 'react-icons/fa';
import { IconContext } from "react-icons";
import Wrapper from '../../hoc/Wrapper';
import Sidedrawer from '../SideDrawer/SideDrawer';

export default class Layout extends Component {
  state = {
    showSideDrawer: false
  }

  sideDrawerCloseHandler = () => {
      this.setState({showSideDrawer: false});
  }

  sidedrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer:!prevState.showSideDrawer};
    });
  }

  render() {
    return(
      <Wrapper>
        <Sidedrawer 
          open={this.state.showSideDrawer} 
          closed={this.sideDrawerCloseHandler}/>
        <header className={ classes['container']}>
          <div className={ classes['title']}>
            <h2>Governance Access Project</h2>
          </div>
          <div className={ classes['logo']}>
            <Logo />
          </div>
          <IconContext.Provider value={{ color: "white", className: "global-class-name", size: '18px' }}>
            <div className={ classes['drawerbutton']}>
                <button onClick={this.sidedrawerToggleHandler}> <FaBars /> </button>
            </div>
          </IconContext.Provider>
          <nav className={ classes['navbar']}>
            <NavigationItems />
          </nav>
        </header>
      </Wrapper>
    );
  }
}
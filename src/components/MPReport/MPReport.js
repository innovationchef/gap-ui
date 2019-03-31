import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper';
import ProfileCards from './ProfileCards/ProfileCards';
import SelectionBox from './SearchComponents/SelectionBox/SelectionBox';
import InputBox from './SearchComponents/InputBox/InputBox';
import MPResultPage from './MPResultPage/MPResultPage';

import classes from './MPReport.css';

export default class MPReport extends Component {
    state = {
        stateButton: false,
        constButton: false,
        selectedState: "Change state",
        selectedConst: "Change constituency",
        inputName: "",
    }

    stateButtonStateHandler = () => {
        this.setState(prevState => ({
            stateButton: !prevState.stateButton
          }));
        
        if(this.state.constButton) {
            this.setState(() => ({
                constButton: false
            }));
        }
    }  

    constButtonStateHandler = () => {
        this.setState(prevState => ({
            constButton: !prevState.constButton
          }));
        
        if(this.state.stateButton) {
            this.setState(() => ({
                stateButton: false
            }));
        }
    }  

    changeStateButtonTextHandler = (name) => {
        this.setState(prevState => ({
            stateButton: false,
            selectedState: name
          }));
    }

    changeConstButtonTextHandler = (name) => {
        this.setState(prevState => ({
            constButton: false,
            selectedConst: name
          }));
    }

    inputChangeHandler = (event) => {
        this.setState({
            inputName: event.target.value
        });
        if(this.state.inputName!==""){
            this.setState(() => ({
                stateButton: false,
                constButton: false,
                selectedState: "Change state",
                selectedConst: "Change constituency"
            }));
        }
    }

    render() {
        const states = [
            { "id": 1, "name": "Bihar" },
            { "id": 2, "name": "Rajasthan" },
            { "id": 3, "name": "Andhra Pradesh" },
            { "id": 4, "name": "Arunachal Pradesh" }
           ]
        const constituencies = [
            { "id": 1, "name": "Amethi" },
            { "id": 2, "name": "Varanasi" },
            { "id": 3, "name": "Balia" },
            { "id": 4, "name": "Kanpur" },
            { "id": 5, "name": "Lucknow" },
            { "id": 6, "name": "Gaziabad" }
           ]
        return (
            <Wrapper>
                <div className= { classes['container'] } >
                    <div className= { classes['search-container'] } >
                        <div className= { classes['search-components'] }>
                            <span className= { classes['search-box'] }>
                                <SelectionBox 
                                    items={states} 
                                    selectedItem={this.state.selectedState}
                                    buttonSelectionState={this.state.stateButton} 
                                    changeButtonSelectionState={this.stateButtonStateHandler}                             
                                    changeButtonText={this.changeStateButtonTextHandler}/>
                            </span> 
                            <span className= { classes['search-box'] }>
                                <SelectionBox 
                                    items={constituencies} 
                                    selectedItem={this.state.selectedConst}
                                    buttonSelectionState={this.state.constButton} 
                                    changeButtonSelectionState={this.constButtonStateHandler}                             
                                    changeButtonText={this.changeConstButtonTextHandler}/>
                            </span>
                            <span className= { classes['search-box'] }>
                                <InputBox changed={this.inputChangeHandler} />
                            </span>
                        </div>
                    </div>
                    <div className= { classes['profile-desc'] } >
                        <MPResultPage />
                    </div>
                    <div className= { classes['profile-list'] } >
                        <ProfileCards />
                    </div>
                </div>
            </Wrapper> 
        );
    }
}
    
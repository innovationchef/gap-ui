import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper';
import PageHeader from '../../components/PageHeader/PageHeader';
import PageFooter from '../../components/PageFooter/PageFooter';

export default class Layout extends Component {
    render() {
        return (
            <Wrapper>
                <PageHeader />
                <main> 
                    {this.props.children} 
                </main>
                <PageFooter />
            </Wrapper> 
        );
    }
}
    
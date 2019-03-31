import react from 'react';

import classes from '.Model.css';
import Wrapper from '../../hoc/Wrapper';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => (
    <Wrapper>
        <Backdrop show={props.show} clicked={props.modalClosed} />  
        <div 
            classes = { classes['modal'] }
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1': '0'
            }}>
            {props.children}
        </div>
    </Wrapper>
);

export default modal;
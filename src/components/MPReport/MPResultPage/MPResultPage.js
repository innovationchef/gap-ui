import React from 'react';

import classes from './MPResultPage.css';

import Image from '../../../assets/MPPhotos/UP_Amethi.jpg';
import Chart from './Chart/Chart';
import ResultCard from './ResultCard/ResultCard';

const MPResultPage = (props) => (
    <div className={ classes['container'] }>
        <div className={ classes['body'] }>
            <div className={ classes['pic-div'] }>
                <img src={Image} alt="MP" className={classes['profile-pic']} />
                <div className={ classes['profile-desc'] }>
                    <h2> Rahul Gandhi </h2>
                    <h3> Amethi, Uttar Pradesh </h3>
                </div>
            </div>
            <div className={ classes['content-div'] }>
                <ResultCard figure = '94%/80%' parameter= 'Attendance/ National Average' type='attendence' />
                <ResultCard figure = '51/65.3' parameter= 'Debate Participated/ National Average' type='debates' />
                <ResultCard figure = '0/2.2' parameter= 'Private member Bills Introduced/ National Average' type='bills' />
                <ResultCard figure = '425/285' parameter= 'Question Asked/ National Average' type='questions' />
            </div>
            <div className={ classes['graph-div'] }>
                <Chart />
            </div>
        </div>
    </div>
);

export default MPResultPage;
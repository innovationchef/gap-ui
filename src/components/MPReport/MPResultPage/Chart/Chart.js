import React from 'react';

import Radar from 'react-d3-radar';
import classes from './Chart.css';

const chart = (props) => (
    <div className={ classes['container'] }>
        <Radar
            width={500}
            height={500}
            padding={70}
            domainMax={10}
            highlighted={null}
            onHover={(point) => {
                if (point) {
                // console.log('hovered over a data point');
                } else {
                // console.log('not over anything');
                }
            }}
            data={{
                variables: [
                {key: 'attendence', label: 'Attendence'},
                {key: 'questions', label: 'Question'},
                {key: 'debates', label: 'Debates'},
                {key: 'mpladutility', label: 'MPLAD Utility'},
                {key: 'reportsubstatus', label: 'Report Submission Status'},
                {key: 'salary', label: 'Salary'},
                ],
                sets: [
                {
                    key: 'me',
                    label: 'My Scores',
                    values: {
                    attendence: 4,
                    questions: 6,
                    debates: 7,
                    mpladutility: 2,
                    reportsubstatus: 8,
                    salary: 1,
                    },
                },
                {
                    key: 'everyone',
                    label: 'Everyone',
                    values: {
                    attendence: 10,
                    questions: 8,
                    debates: 6,
                    mpladutility: 4,
                    reportsubstatus: 2,
                    salary: 0,
                    },
                },
                ],
            }}
            />
    </div>
);

export default chart;

import React from 'react';

import ProfileCard from './ProfileCard/ProfileCard';
import classes from './ProfileCards.css';

import Image from '../../../assets/MPPhotos/UP_Amethi.jpg';
import CongressLogo from '../../../assets/Logos/congress-logo.png';

const profileCards = (props) => (
    <div className={ classes['container'] }>
        <div className={ classes['profile-card'] }>
            <ProfileCard name="RAHUL GANDHI" state="Uttar Pradesh" constituency="Amethi" image={Image} logo={CongressLogo} stars={2} />
        </div>

        <div className={ classes['profile-card'] }>
            <ProfileCard name="RAHUL GANDHI" state="Uttar Pradesh" constituency="Amethi" image={Image} logo={CongressLogo} stars={2} />
        </div>

        <div className={ classes['profile-card'] }>
            <ProfileCard name="RAHUL GANDHI" state="Uttar Pradesh" constituency="Amethi" image={Image} logo={CongressLogo} stars={2} />
        </div>

        <div className={ classes['profile-card'] }>
            <ProfileCard name="RAHUL GANDHI" state="Uttar Pradesh" constituency="Amethi" image={Image} logo={CongressLogo} stars={2} />
        </div>

        <div className={ classes['profile-card'] }>
            <ProfileCard name="RAHUL GANDHI" state="Uttar Pradesh" constituency="Amethi" image={Image} logo={CongressLogo} stars={2} />
        </div>

        <div className={ classes['profile-card'] }>
            <ProfileCard name="RAHUL GANDHI" state="Uttar Pradesh" constituency="Amethi" image={Image} logo={CongressLogo} stars={2} />
        </div>

        <div className={ classes['profile-card'] }>
            <ProfileCard name="RAHUL GANDHI" state="Uttar Pradesh" constituency="Amethi" image={Image} logo={CongressLogo} stars={2} />
        </div>

        <div className={ classes['profile-card'] }>
            <ProfileCard name="RAHUL GANDHI" state="Uttar Pradesh" constituency="Amethi" image={Image} logo={CongressLogo} stars={2} />
        </div>

        <div className={ classes['profile-card'] }>
            <ProfileCard name="RAHUL GANDHI" state="Uttar Pradesh" constituency="Amethi" image={Image} logo={CongressLogo} stars={2} />
        </div>
        
    </div>
);

export default profileCards;
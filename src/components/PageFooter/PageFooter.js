import React from 'react';
import classes from './PageFooter.css';
import { MdCopyright } from 'react-icons/md';

const footer = () => (
    <footer>
        <div className= { classes['header-container'] }>
            <div className= { classes['header'] }>
                <p className={ classes['signup-message'] }> Receive Latest updates </p>
            </div>
            <div className= { classes['header'] }>
                <input className={ classes['email-box'] } type="email" />
                <button className={ classes['send-button'] }> Subscribe </button>
            </div>
        </div>
        <div className= { classes['body-container'] }>
            <div className= { classes['body-mission'] }>
                <h4 className={ classes['text-header'] }>Our Mission</h4>
                <p className={ classes['text'] }>
                    To provide independent and non-partisan, research support to Members of 
                    Parliament (MPs) and Members of Legislative Assemblies (MLAs) across party 
                    lines on all legislation and policy debates in the legislature. Track the 
                    functioning of legislatures and legislators by releasing detailed data and 
                    analysis. Devise means by which citizens are more aware and engaged in the 
                    policy making process.
                </p>
            </div>

            <div className= { classes['body-quicklinks'] }>
                <h4 className={ classes['text-header'] }>Quick Links</h4>
                <ul className={ classes['quicklinks-list'] }>
                    <li>Bills</li>
                    <li>MP Report</li>
                    <li>Blogs</li>
                    <li>Team</li>
                </ul>
            </div>

            <div className= { classes['body-contactus'] }>
                <h4 className={ classes['text-header'] }>Contact Us</h4>
            </div>
        </div>

        <div className= { classes['footer-container'] }>
            <div className= { classes['footer-termsofuse'] }>
            <h4 className={ classes['text-header'] }>Terms of user</h4>
                <p className={ classes['text'] }>
                    To provide independent and non-partisan, research support to Members of 
                    Parliament (MPs) and Members of Legislative Assemblies (MLAs) across party 
                    lines on all legislation and policy debates in the legislature. Track the 
                    functioning of legislatures and legislators by releasing detailed data and 
                    analysis. Devise means by which citizens are more aware and engaged in the 
                    policy making process.
                </p>
            </div>
            <div className= { classes['footer-disclaimer'] }>
            <h4 className={ classes['text-header'] }>Content Disclaimer</h4>
                <p className={ classes['text'] }>
                    To provide independent and non-partisan, research support to Members of 
                    Parliament (MPs) and Members of Legislative Assemblies (MLAs) across party 
                    lines on all legislation and policy debates in the legislature.
                </p>
            </div>
            <div className= { classes['footer-item'] }>
                <p className={ classes['text'] }>Privacy</p>
                <p className={ classes['text'] }> | </p>
                <p className={ classes['text'] }>
                    <MdCopyright />
                    2019 govaccessproject.com
                </p>
                <p className={ classes['text'] }> | </p>
                <p className={ classes['text'] }>Sitemap</p>
            </div>
        </div>
    </footer>
);

export default footer;
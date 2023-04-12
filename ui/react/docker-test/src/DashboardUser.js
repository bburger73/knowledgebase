import React from 'react';

class DashboardUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render(){
        const multiplesInDiv = (
            <div className='dashboard'>\
                <h1>Dashboard</h1>
            </div>
        );

        return multiplesInDiv;
    }
}

/***TODO:
 * Integrate ICAL and GoogleCalendar
 * Titles on cards. for users
 * 
 */

export default DashboardUser;
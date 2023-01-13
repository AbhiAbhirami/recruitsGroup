import React from 'react'
import NotificationCard from './NotificationCard'

function Notification() {
    return (
        <div className='notification-main-cont'>
            <h3 className='new-jobs-head'>Notification</h3>
            <div className='new-notification-cards-cont'>
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
                <NotificationCard />
            </div>
        </div>
    )
}

export default Notification

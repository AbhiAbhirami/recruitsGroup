import React from 'react'
import UpcomingEventCard from './UpcomingEventCard'

function UpcomingEvents() {
    return (
        <div className='upcoming-events-main-cont'>
            <h3 className='new-jobs-head'>Upcoming Events</h3>
            <p className='todo-sub-heading'>Dont miss scheduled events </p>
            <div className='todo-cards-cont'>
                <UpcomingEventCard />
                <UpcomingEventCard />
                <UpcomingEventCard />
            </div>
        </div>
    )
}

export default UpcomingEvents

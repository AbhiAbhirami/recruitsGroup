import React from 'react'
import BackgroundDesign from '../Shared/BackgroundDesign'
import Header from '../Shared/Header'
import NewJobs from '../Shared/NewJobs/NewJobs'
import Notification from '../Shared/Notification/Notification'
import Todo from '../Shared/Todo/Todo'

function Dashboard() {
    return (
        <div className='dashboard-main-cont'>
            <Header />
            <BackgroundDesign />
            <div className='dashboard-section-cont' >
                <h4 className='dashboard-header'>Dashboard</h4>
                <div className='dashboard-first-section'>
                    <NewJobs />
                    <Notification />

                </div>
                <div className='dashboard-first-section'>
                    <Todo />
                </div>

            </div>

        </div>
    )
}

export default Dashboard

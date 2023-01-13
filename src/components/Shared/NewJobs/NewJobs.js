import React from 'react'
import JobCard from './JobCard'

function NewJobs() {
    return (
        <div className='new-jobs-main-cont'>
            <h3 className='new-jobs-head'>New Jobs</h3>
            <div className='new-jobs-cards-cont'>
                <JobCard />
                <JobCard />
                <JobCard />
            </div>
        </div>
    )
}

export default NewJobs

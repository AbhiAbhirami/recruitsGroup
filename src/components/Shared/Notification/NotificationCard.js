import React from 'react'
import stackIcon from '../../../assets/images/icons/stack.png'

function NotificationCard() {
    return (
        <div className='notification-card-main-cont'>
            <img src={stackIcon} alt="stack-icon" />
            <div>
                <span style={{ fontSize: "14px" }}>A new comment is added in your
                    in your recent application A new comment is added in your
                    in your recent application</span>
            </div>
        </div>
    )
}

export default NotificationCard

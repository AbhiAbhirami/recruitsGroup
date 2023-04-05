import React, { useState } from 'react'

function NotificationSingle() {
    const [isPopUp, setIsPopUp] = useState(false);



    return (
        <div className='notification-single-main-cont' >
            <div>
                <i style={{ fontSize: '25px' }} class="fa fa-exclamation-circle" aria-hidden="true"></i>

            </div>
            <p className='notification-content-p-tag'>If you aren't satisfied with the build tool and configuration choices, you can eject at any time. </p>
            <div className='dismiss-pop-up-container' style={{ marginLeft: "auto" }}>
                {/* <i style={{ fontSize: '25px', cursor: "pointer" }} onClick={() => setIsPopUp(!isPopUp)} class="fa fa-ellipsis-v" aria-hidden="true"></i> */}
                <p style={{ fontSize: "14px", cursor: "pointer", color: 'black', textDecoration: "underline" }}>Dismiss</p>
                {/* <div style={isPopUp ? { display: "flex" } : { display: "none" }} className='notification-single-dismiss-pop-up'>
                    <p className='dismiss-pop-up-p-tag'>Dismiss</p>
                </div> */}
            </div>
        </div>
    )
}

export default NotificationSingle

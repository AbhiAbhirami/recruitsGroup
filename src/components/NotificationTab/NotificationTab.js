import React from 'react'
import BackgroundDesign from '../Shared/BackgroundDesign'
import Loader from '../Shared/Loader'
import NotificationSingle from './NotificationSingle';

function NotificationTab() {
    const loading = false;
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', paddingBottom: '20px' }}>
            <BackgroundDesign />

            {loading && (
                <Loader />
            )}
            <div className='notification-tab-main-cont'>
                <div className='notification-tab-header-cont'>
                    <h3>Notifications</h3>
                </div>
                <div className='notification-tab-notification-cont'>
                    <NotificationSingle />
                    <NotificationSingle />
                    <NotificationSingle />
                    <NotificationSingle />
                    <NotificationSingle />
                    <NotificationSingle />
                    <NotificationSingle />
                    <NotificationSingle />
                    <NotificationSingle />
                    <NotificationSingle />
                    <NotificationSingle />
                </div>

            </div>
        </div>
    )
}

export default NotificationTab

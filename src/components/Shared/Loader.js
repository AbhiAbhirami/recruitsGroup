import React from 'react'
import { Spinner } from 'reactstrap'

function Loader() {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
            />

            <div className="dash-load">
                <Spinner
                    animation="border"
                    color="primary"
                    type="grow"
                    className="spinner"
                />
            </div>
        </>
    )
}

export default Loader
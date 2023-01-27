import React from 'react'
import Modal from "react-modal";



const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "40%",
        padding: "0",
        zIndex: 999
    },
};

function ApplyConfirmModal({ isOpen, closeModal }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div style={{ padding: "3% 5%", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, borderBottom: "1px solid lightgray", padding: "5px 0" }}>Confirm Application</div>
                <div style={{ height: "70px", alignItems: "center", display: "flex" }}>Click on apply button for sumitting your request</div>
                <div style={{ height: "70px", display: "flex", gap: "20px", justifyContent: "flex-end", alignItems: "center" }}>
                    <button style={{
                        background: "#FF605C",
                        borderRadius: "10px",
                        padding: "10px 15px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: 600
                    }}
                        onClick={() => closeModal()}>Cancel</button>
                    <button style={{
                        background: "#fecf34",
                        borderRadius: "10px",
                        padding: "10px 15px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: 600
                    }}>Apply Now</button>

                </div>
            </div>
        </Modal>
    )
}

export default ApplyConfirmModal

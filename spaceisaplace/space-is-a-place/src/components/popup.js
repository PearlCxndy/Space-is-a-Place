import React from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';

const Popup = ({ setIsOpenPopup, children }) => {
    return (
        <div
            onClick={() => setIsOpenPopup(false)}
            style={{
                position: 'fixed',
                background: 'rgba(0,0,0,0.6)',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: 'relative',
                    background: 'white',
                    borderRadius: '8px',
                    width: '250px',
                    padding: '20px 10px',
                }}
            >
                <div
                    onClick={() => setIsOpenPopup(false)}
                    style={{
                        cursor: 'pointer',
                        position: 'absolute',
                        top: 10,
                        right: 10,
                    }}
                >
                    <AiOutlineCloseSquare />
                </div>
                {children}
            </div>
        </div>
    );
};

export default Popup;

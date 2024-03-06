import React from 'react';

function Card(props) {
    return (
        <div style={{
            ...styles.card,
            ...styles[props.size]
        }}>
            {props.children} {/* Add this line to render children */}
        </div>
    );
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: '20px', // Added some padding for content inside the card
        borderRadius: '16px',
        color: 'white', // Assuming you want white text on a black background
        backgroundColor: 'black'
    },
    small: {
        gridRowEnd: 'span 26',
    },
    medium: {
        gridRowEnd: 'span 33',
    },
    large: {
        gridRowEnd: 'span 45',
    }
}

export default Card;

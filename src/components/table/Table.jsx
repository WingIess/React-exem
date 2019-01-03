import React from 'react';

const table = (props) => {
    return (
        <div className="table">
            <div>player: {props.playerScore}</div>
            <input type="text" value={props.player} disabled />
            <div>AI: {props.aiScore}</div>
            <input type="text" value={props.ai} disabled />
        </div>
    )
}

export default table;
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    player: PropTypes.number.isRequired,
    playerScore: PropTypes.number.isRequired,
    ai: PropTypes.number.isRequired,
    aiScore: PropTypes.number.isRequired
};

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

table.propTypes = propTypes;

export default table;
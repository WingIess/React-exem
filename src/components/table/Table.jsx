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
            <div>{props.player}</div>
            <div>AI: {props.aiScore}</div>
            <div>{props.ai}</div>
        </div>
    );
};

table.propTypes = propTypes;

export default table;

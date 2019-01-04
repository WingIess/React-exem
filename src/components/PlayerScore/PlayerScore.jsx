import React, { Fragment } from 'react';

const PlayerScore = (props) => {
    return (
        <Fragment>
            <div>{props.name}</div>
            <div>{props.score}</div>
        </Fragment>
    );
};

export default PlayerScore;

import React, { Fragment } from 'react';

const PlayerScore = (props) => {
    return (
        <Fragment>
            <div>props.score.name</div>
            <div>props.score.points</div>
        </Fragment>
    );
};

export default PlayerScore;

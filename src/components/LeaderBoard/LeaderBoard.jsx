import React from 'react';
import PlayerScore from './PlayerScore/PlayerScore';

const LeaderBoard = props => {
    return (
        <div className="leaderBoard">
        {props.PlayerScores.map((score) => {
            // <PlayerScore score={score.name} />
        })}
        </div>
    );
};

export default LeaderBoard;

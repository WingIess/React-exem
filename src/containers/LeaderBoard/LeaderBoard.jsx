import React, {Component} from 'react';
import PlayerScore from '../../components/PlayerScore/PlayerScore';
import axios from '../../axios/firebase-axios';

class LeaderBoard extends Component {
    state = {
        bestScores: []
    }
    async componentDidMount() {
        try {
            const responseTwo = await axios.get('scores.json');
            const scoresObject = responseTwo.data;
            const bestScores = Object.keys(scoresObject).map(key => ({
                name: scoresObject[key].playerName,
                score: scoresObject[key].playerScore - scoresObject[key].aiScore
            }));
            this.setState({bestScores})
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className="leader-board">
            <span onClick={this.props.close} className="fas fa-times"></span>
            <span className="title">Leader Board</span>
            {this.state.bestScores.map((score, index) => <PlayerScore name={this.state.bestScores[index].name} score={this.state.bestScores[index].score} key={index} />)}
            </div>
        );
    }

}

export default LeaderBoard;

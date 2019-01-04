import React, { Component } from 'react';
import axios from '../../axios/firebase-axios';
import Table from '../../components/Table/Table';
import ScoreSubmit from '../../components/ScoreSubmit/ScoreSubmit';
import LeaderBoard from '../LeaderBoard/LeaderBoard';

class RandomNumber extends Component {
    state = {
        player: 0,
        ai: 0,
        playerName: 'player name',
        playerScore: 0,
        aiScore: 0,
        score: '',
        submitError: false,
        roundsLeft: 10,
        leaderBoardShow: false
    };

    async componentDidMount() {
        try {
            const roundsLeft = await axios.get('roundsPlayed.json');
            this.setState({ roundsLeft: roundsLeft.data });
        } catch (err) {
            console.log(err);
        }
    }

    leaderBoardToggleHandler = () => {
        this.setState(prevState => ({
            leaderBoardShow: !prevState.leaderBoardShow
        }));
    };

    render() {
        return (
            <div className="random-number">
                <div onClick={this.leaderBoardToggleHandler} className="btn leader-board-btn">
                    Leader board
                </div>
                {this.state.leaderBoardShow ? <LeaderBoard close={this.leaderBoardToggleHandler} /> : null}
                <ScoreSubmit
                    error={this.state.submitError}
                    change={this.playerNameHandler}
                    name={this.state.playerName}
                    submit={this.postScoreHandler}
                />
                <Table
                    player={this.state.player}
                    ai={this.state.ai}
                    playerScore={this.state.playerScore}
                    aiScore={this.state.aiScore}
                />
                <button
                    className="center"
                    onClick={this.randomScoreHandler}
                    disabled={this.state.roundsLeft === 0 ? true : false}
                >
                    Roll the numbers
                </button>
                <div className="score-board">{this.state.score}</div>
            </div>
        );
    }

    roundsHandler = () => {
        this.setState(prevState => {
            return {
                roundsLeft: --prevState.roundsLeft
            };
        });
    };

    randomScoreHandler = () => {
        const player = Math.floor(Math.random() * Math.floor(10) + 1);
        const ai = Math.floor(Math.random() * Math.floor(10) + 1);

        let score = 'draw';

        if (player < ai) {
            score = 'ai wins';
            this.setState(prevState => ({
                player,
                ai,
                aiScore: prevState.aiScore + 1,
                score
            }));
        }
        if (player > ai) {
            score = 'player wins';
            this.setState(prevState => ({
                player,
                ai,
                playerScore: prevState.playerScore + 1,
                score
            }));
        }
        if (player === ai) {
            this.setState(prevState => ({
                player,
                ai,
                score
            }));
        }
        this.roundsHandler();
    };

    playerNameHandler = event => {
        if (event.target.value !== '') {
            this.setState({ playerName: event.target.value });
        }
    };

    postScoreHandler = () => {
        const scores = {
            playerName: this.state.playerName,
            playerScore: this.state.playerScore,
            aiScore: this.state.aiScore
        };
        axios
            .post('/scores.json', scores)
            .then(response => this.setState({ submitError: false }))
            .catch(error => this.setState({ submitError: true }));
    };
}

export default RandomNumber;

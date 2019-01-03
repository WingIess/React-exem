import React, { Component, Fragment } from 'react';
import axios from '../../axios/firebase-axios';

class RandomNumber extends Component {
    state = {
        player: 0,
        ai: 0,
        playerName: 'player name',
        playerScore: 0,
        aiScore: 0,
        score: ''
    };

    render() {
        const table = (
            <div className="table">
                <div>player: {this.state.playerScore}</div>
                <input type="text" value={this.state.player} disabled />
                <div>AI: {this.state.aiScore}</div>
                <input type="text" value={this.state.ai} disabled />
            </div>
        );
        return (
            <Fragment>
                <input
                    className="center"
                    onChange={e => this.playerNameHandler(e)}
                    type="text"
                    placeholder={this.state.playerName}
                />
                <button style={{ marginTop: 20 }} className="center" onClick={this.postScoreHandler}>
                    submit score
                </button>
                {table}
                <button className="center" onClick={this.randomNumberHandler}>
                    Roll the numbers
                </button>
                <div className="score-board">{this.state.score}</div>
            </Fragment>
        );
    }

    randomNumberHandler = () => {
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
            this.setState(prevState => {
                return {
                    player,
                    ai,
                    playerScore: prevState.playerScore + 1,
                    score
                };
            });
        } else {
            this.setState(prevState => ({
                player,
                ai,
                score
            }));
        }
    };

    playerNameHandler = event => {
        if (event.target.value !== '') {
            this.setState({ playerName: event.target.value });
        }
    };

    postScoreHandler = () => {
        // axios.request.use(request => {
        //     console.log(request);
        // })
        const scores = {
            player: {
                playerName: this.state.playerName,
                playerScore: this.state.playerScore,
                aiScore: this.state.aiScore
            }
        }
        axios.post('/scores.json', scores)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
}

export default RandomNumber;

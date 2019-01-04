import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    player: PropTypes.number.isRequired,
    playerScore: PropTypes.number.isRequired,
    ai: PropTypes.number.isRequired,
    aiScore: PropTypes.number.isRequired
};

class table extends Component {

    async componentDidMount() {
        
    }

    render() {
        return (
            <div className="table">
                <div>player: {this.props.playerScore}</div>
                <input type="text" value={this.props.player} disabled />
                <div>AI: {this.props.aiScore}</div>
                <input type="text" value={this.props.ai} disabled />
            </div>
        )
    }
}

table.propTypes = propTypes;

export default table;
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name: PropTypes.string.isRequired,
    change: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    error: PropTypes.bool.isRequired
};

const ScoreSubmit = props => {
    let error = null;
    if (props.error) {

        error =  <p className="center error">An error has occurred</p>
    }
    return (
        <Fragment>
            <input className="center" onChange={event => props.change(event)} type="text" placeholder={props.name} />
            <button style={{ marginTop: 20 }} className="center" onClick={props.submit}>
                submit score
            </button>
            {error}
        </Fragment>
    );
};

ScoreSubmit.propTypes = propTypes;

export default ScoreSubmit;

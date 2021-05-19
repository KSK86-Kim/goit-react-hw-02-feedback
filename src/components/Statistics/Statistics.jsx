import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <ul>
                <li>Good : {good}</li>
                <li>Neutral : {neutral}</li>
                <li>Bad : {bad}</li>
                <li>Total : {total}</li>
                <li>Positive feedback : {positivePercentage} %</li>
            </ul>
        );
    }
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
};

export default Statistics;

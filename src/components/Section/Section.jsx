import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

class Section extends Component {
    render() {
        const { children } = this.props;
        return <section>{children}</section>;
    }
}
Section.propTypes = {
    title: PropTypes.string,
};

export default Section;

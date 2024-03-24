
import React from "react";
import PropTypes from "prop-types";

import styles from './input.module.scss';

const Input = ({ value, onChange, placeholder, disabled }) => {
    return <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.container}
        placeholder={placeholder}
        disabled={disabled}
    />;
}

export default Input;

Input.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}

Input.defaultProps = {
    value: '',
    placeholder: '',
    onChange: () => { },
    disabled: false
}
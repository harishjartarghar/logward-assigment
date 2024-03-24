
import React from "react";
import PropTypes from "prop-types";

import styles from './textArea.module.scss';
const TextArea = ({ value, onChange, placeholder, focus }) => {
    return <textarea
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={styles.container}
        placeholder={placeholder}
        autoFocus={focus}
    />;
}

export default TextArea;

TextArea.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string
}

TextArea.defaultProps = {
    value: '',
    onChange: () => { },
    placeholder: ''
}
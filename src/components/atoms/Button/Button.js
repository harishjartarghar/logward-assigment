import React from "react"
import cx from 'classnames';
import PropTypes from "prop-types";


import styles from './button.module.scss'
import { BUTTON_VARIATIONS } from "./button.constants";

const NextButton = ({ variation, disabled, onClick, label, className, endIcon }) => {
    return (
        <button onClick={onClick} disabled={disabled} className={cx(styles.container, { [styles.disabled]: disabled }, styles[variation], className)}>
            {label}
            {endIcon}
        </button>)
}

export { BUTTON_VARIATIONS }

export default NextButton

NextButton.propTypes = {
    variation: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.bool
}

NextButton.defaultProps = {
    variation: BUTTON_VARIATIONS.PRIMARY,
    disabled: false,
    onClick: () => { }
}
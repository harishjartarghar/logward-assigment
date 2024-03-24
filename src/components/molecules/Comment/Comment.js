
import React from "react";
import PropTypes from "prop-types";
import Button, { BUTTON_VARIATIONS } from "@/components/atoms/Button";

import styles from './comment.module.scss';

const Comment = ({ name, comment, id, showReplyCTA, showEditCTA, handleReplyCTA, handleEditCTA }) => {
    const date = new Date(id);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getUTCFullYear()
    const exactDate = date.getDate()


    return (
        <div className={styles.container}>
            <div className={styles.nameDateContainer}>
                <p>{name}</p>
                <p>{`${exactDate} ${month}, ${year}`}</p>
            </div>
            <p>{comment}</p>
            <div className={styles.actions}>
                {showReplyCTA && <Button variation={BUTTON_VARIATIONS.SECONDARY} label={"Reply"} onClick={handleReplyCTA} />}
                {showEditCTA && <Button variation={BUTTON_VARIATIONS.SECONDARY} label={"Edit"} onClick={handleEditCTA} />}
            </div>
        </div>)
}

export default Comment;

Comment.propTypes = {
    name: PropTypes.string,
    comment: PropTypes.string,
    date: PropTypes.string,
    showReplyCTA: PropTypes.string,
    showEditCTA: PropTypes.string,
    handleReplyCTA: PropTypes.func,
    handleEditCTA: PropTypes.func,
}

Comment.defaultProps = {
    name: '',
    comment: '',
    date: '',
    showReplyCTA: true,
    showEditCTA: true,
    handleReplyCTA: () => { },
    handleEditCTA: () => { },
}
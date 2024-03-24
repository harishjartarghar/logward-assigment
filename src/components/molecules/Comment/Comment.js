
import React from "react";
import PropTypes from "prop-types";
import Button, { BUTTON_VARIATIONS } from "@/components/atoms/Button";

import { AiTwotoneDelete } from "react-icons/ai";

import styles from './comment.module.scss';
import { LABELS } from "@/base/constants/label.constants";

const Comment = ({ name, comment, id, showReplyCTA, showEditCTA, handleReplyCTA, handleEditCTA, handleDeleteCTA }) => {
    const date = new Date(id);

    return (
        <div className={styles.container}>
            <div className={styles.nameDateContainer}>
                <p>{name}</p>
                <p>{`${date.getDate()} ${date.toLocaleString('default', { month: 'long' })}, ${date.getUTCFullYear()}`}</p>
            </div>
            <p>{comment}</p>
            <div className={styles.actions}>
                {showReplyCTA && <Button variation={BUTTON_VARIATIONS.SECONDARY} label={LABELS.REPLY} onClick={handleReplyCTA} />}
                {showEditCTA && <Button variation={BUTTON_VARIATIONS.SECONDARY} label={LABELS.EDIT} onClick={handleEditCTA} />}
            </div>
            <div onClick={handleDeleteCTA} className={styles.deleteContainer}>
                <AiTwotoneDelete />
            </div>
        </div>)
}

export default Comment;

Comment.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    comment: PropTypes.string,
    date: PropTypes.string,
    showReplyCTA: PropTypes.string,
    showEditCTA: PropTypes.string,
    handleReplyCTA: PropTypes.func,
    handleEditCTA: PropTypes.func,
    handleDeleteCTA: PropTypes.func
}

Comment.defaultProps = {
    id: '',
    name: '',
    comment: '',
    date: '',
    showReplyCTA: true,
    showEditCTA: true,
    handleReplyCTA: () => { },
    handleEditCTA: () => { },
    handleDeleteCTA: () => { }
}
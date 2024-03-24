
import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import Input from "@/components/atoms/Input";
import TextArea from "@/components/atoms/TextArea";
import Button from "@/components/atoms/Button";

import styles from './comment.module.scss';

const CommentBox = ({ name: defaultName, comment: defaultComment, label, onSubmit, id, parentId, editComment }) => {
    const [name, setName] = useState(defaultName);
    const [comment, setComment] = useState(defaultComment);

    const handleSubmit = useCallback(() => {

        if (!name || !comment) return;

        onSubmit({ name, comment, ...(parentId && { parentId }), ...({ id }) });

        setName('');
        setComment('');
    }, [name, comment])


    return (
        <div className={styles.container}>
            <p>{label}</p>
            <Input value={name} onChange={setName} placeholder="Name" disabled={editComment} />
            <TextArea value={comment} onChange={setComment} placeholder="Comment" focus={editComment} />
            <Button onClick={handleSubmit} label={"POST"} className={styles.buttonContainer} />
        </div>)
}

export default CommentBox;

CommentBox.propTypes = {
    name: PropTypes.string,
    comment: PropTypes.string,
    parentId: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    onSubmit: PropTypes.func,
    editComment: PropTypes.bool
}

CommentBox.defaultProps = {
    name: '',
    comment: '',
    parentId: '',
    id: '',
    label: "Comment",
    onSubmit: () => { },
    editComment: false

}
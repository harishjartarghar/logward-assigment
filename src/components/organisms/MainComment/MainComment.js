import React, { useState } from "react";
import PropTypes from "prop-types";

import Comment from "@/components/molecules/Comment";

import styles from './mainComment.module.scss';
import CommentBox from "@/components/molecules/CommentBox";
import useComments from "@/hooks/useComments";

const MainComment = ({ name, comment, id, replies }) => {

    const [showReply, setShowReply] = useState(false);
    const [editCommentId, setEditCommentId] = useState();

    const { handleEditComment, handleReplyComment, handleDeleteComment, handleDeleteReplyComment, data, isSortAsc } = useComments()

    // Inside the component:
    const handleOnBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
            setEditCommentId('')
        }
    }
    return (
        <div className={styles.container} onBlur={handleOnBlur}>
            {editCommentId !== id && <Comment id={id} name={name} comment={comment} handleReplyCTA={() => { setShowReply(!showReply); setEditCommentId('') }} handleEditCTA={() => { setEditCommentId(id); setShowReply(false) }} handleDeleteCTA={() => handleDeleteComment({ id })} />}
            {editCommentId === id && <CommentBox label="Edit Comment" id={id} name={name} comment={comment} onSubmit={(data) => { handleEditComment(data); setEditCommentId('') }} editComment />}
            <div className={styles.subContainer}>
                {showReply && <CommentBox label="Reply" parentId={id} onSubmit={handleReplyComment} />}
                {
                    replies.map((replyId) => {
                        const { name, comment } = data[replyId];
                        if (replyId === editCommentId) return <CommentBox label="Edit Reply" id={replyId} name={name} comment={comment} parentId={id} onSubmit={(data) => { handleEditComment(data); setEditCommentId('') }} editComment />;
                        return <Comment
                            key={replyId} id={replyId} name={name} comment={comment} showReplyCTA={false} handleEditCTA={() => { setEditCommentId(replyId); setShowReply(false) }} handleDeleteCTA={() => handleDeleteReplyComment({ id: replyId, parentId: id })} />
                    })
                }
            </div>

        </div>
    )
}

export default MainComment;

MainComment.propTypes = {
    name: PropTypes.string,
    comment: PropTypes.string,
    replies: PropTypes.array,
    id: PropTypes.string
}

MainComment.defaultProps = {
    name: '',
    comment: '',
    replies: [],
    id: ''
}
import React, { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

import CommentsContext from "@/context/CommentsContext";
import { getValueFromLocalStorage, setValueInLocalStorage } from "@/base/utils/localStorage";

import { STORAGE_KEYS } from "@/base/constants/common.constants";


/*
comments

comments: [id1,id2,id3,id4]

data:{
    [id]:{
        id:"",
        name:"",
        comment:"",
        replies:[sid1,sid2,sid3,sid4]
    }
}
*/

const CommentsProvider = ({ children }) => {

    const [comments, setComments] = useState(() => {
        const savedItem = getValueFromLocalStorage(STORAGE_KEYS.COMMENTS);
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || [];
    });
    const [data, setData] = useState(() => {
        const savedItem = getValueFromLocalStorage(STORAGE_KEYS.DATA);
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || {};
    });

    useEffect(() => {
        setValueInLocalStorage(STORAGE_KEYS.DATA, JSON.stringify(data));
    }, [data])

    useEffect(() => {
        setValueInLocalStorage(STORAGE_KEYS.COMMENTS, JSON.stringify(comments))
    }, [comments])

    const handleAddComment = useCallback(({ name, comment }) => {
        const id = Date.now();
        const newComment = { name, comment, id, replies: [] }

        setData(prev => ({ ...prev, [id]: newComment }));
        setComments(prev => ([...prev, id]));

    }, []);

    const handleEditComment = useCallback(({ id, comment }) => {
        const commentData = data[id];
        const newComment = { ...commentData, comment: comment }
        setData(prev => ({ ...prev, [id]: newComment }));
    }, [data]);

    const handleReplyComment = useCallback(({ parentId, name, comment }) => {
        const id = Date.now();
        const newComment = { name, comment, id }

        const parenComment = data[parentId];
        const { replies } = parenComment;
        replies.push(id);

        setData(prev => ({ ...prev, [parentId]: parenComment, [id]: newComment }));

    }, [data]);

    const handleDeleteComment = useCallback(({ id }) => {
        setComments((comments) => comments.filter((commentId) => commentId !== id));
        setData(prev => {
            const newPrev = { ...prev };
            const { replies } = prev[id];
            delete newPrev[id]
            for (const replyId of replies) delete newPrev[replyId];
            return newPrev;
        })
    }, []);

    const handleDeleteReplyComment = useCallback(({ id, parentId }) => {
        const parentComment = data[parentId];
        const { replies } = parentComment;
        const filteredReplies = replies.filter((commentId) => commentId !== id)
        setData(prev => {
            const newPrev = { ...prev };
            delete newPrev[id];
            return ({ ...newPrev, [parentId]: { ...parentComment, replies: filteredReplies } })
        });
    }, [data]);

    const contextValues = useMemo(() => ({
        comments,
        data,
        handleAddComment,
        handleEditComment,
        handleReplyComment,
        handleDeleteComment,
        handleDeleteReplyComment
    }), [
        comments,
        data,
        handleAddComment,
        handleEditComment,
        handleReplyComment,
        handleDeleteComment,
        handleDeleteReplyComment
    ])

    return (
        <CommentsContext.Provider value={contextValues}>
            {children}
        </CommentsContext.Provider>);
}

export default CommentsProvider;

CommentsProvider.propTypes = {
    children: PropTypes.node
}

CommentsProvider.defaultProps = {
    children: null
}
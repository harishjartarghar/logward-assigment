import React from "react";

import useComments from "@/hooks/useComments";

import MainComment from "../MainComment";

import styles from './commentSection.module.scss';

const CommentSection = () => {
    const { data, comments, isSortAsc } = useComments();
    const finalComments = isSortAsc ? comments : [...comments].reverse();

    return (
        <div className={styles.container}>
            {
                finalComments.map((id) => {
                    const { name, comment, replies } = data[id];
                    const finalReplies = isSortAsc ? replies : [...replies].reverse();
                    return <MainComment key={id} id={id} name={name} comment={comment} replies={finalReplies} />
                })
            }
        </div>
    )
}

export default CommentSection;
import React from "react";

import useComments from "@/hooks/useComments";

import MainComment from "../MainComment";

import styles from './commentSection.module.scss';

const CommentSection = () => {
    const { data, comments } = useComments();

    console.log("<<!>>", data, comments)

    return (
        <div className={styles.container}>
            {
                comments.map((id) => {
                    const { name, comment, replies } = data[id];
                    return <MainComment key={id} id={id} name={name} comment={comment} replies={replies} />
                })
            }
        </div>
    )
}

export default CommentSection;
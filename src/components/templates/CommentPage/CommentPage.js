import React from "react";

import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import CommentSection from "@/components/organisms/CommentSection";
import CommentBox from "@/components/molecules/CommentBox";

import useComments from "@/hooks/useComments";

import Button, { BUTTON_VARIATIONS } from "@/components/atoms/Button";

import styles from './commentPage.module.scss'
import { LABELS } from "@/base/constants/label.constants";


const CommentPage = () => {
    const { handleAddComment, handleToggleSort, isSortAsc, comments } = useComments();

    return (
        <div className={styles.container}>
            <CommentBox onSubmit={handleAddComment} />
            {comments.length > 0 && <Button
                variation={BUTTON_VARIATIONS.PLAIN}
                label={LABELS.SORT}
                endIcon={isSortAsc ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />}
                className={styles.button}
                onClick={handleToggleSort}
            />}
            <CommentSection />
        </div>
    )
}

export default CommentPage;
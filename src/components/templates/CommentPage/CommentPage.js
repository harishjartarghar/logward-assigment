import React from "react";

import CommentSection from "@/components/organisms/CommentSection";
import CommentBox from "@/components/molecules/CommentBox";
import useComments from "@/hooks/useComments";

const CommentPage = () => {
    const { handleAddComment } = useComments();

    return (
        <div>
            <CommentBox onSubmit={handleAddComment} />
            <CommentSection />
        </div>
    )
}

export default CommentPage;
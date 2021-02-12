import React from 'react';
import SingleComment from './SingleComment';

const ReplyComment = ({commentList, parentCommentId, refreshCommentList}) => {
    console.log(commentList,'from reply component')
    console.log(parentCommentId,'from reply component')
    return (
        <div style={{marginLeft:'15px'}}>
            {commentList.map(comment => (
                (comment.replyTo === parentCommentId ) && (
                    <div>
                        <SingleComment {...comment} refreshCommentList={refreshCommentList}/>
                        <ReplyComment commentList={commentList} parentCommentId={comment.postIndex} refreshCommentList={refreshCommentList}/>
                    </div>
                )
            ))}
        </div>
    );
}

export default ReplyComment;

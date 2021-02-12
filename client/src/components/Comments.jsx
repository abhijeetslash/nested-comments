import React, { useState } from 'react';
import RecursiveComponent from './RecursiveComponent';
import SingleComment from './SingleComment';
import ReplyComment from './ReplyComment';

const Comments = ({commentList, refreshCommentList}) => {

    console.log(commentList,'check-comment-list')
    const [comment, setComment] = useState('');

    const submitHandler = e => {

        e.preventDefault();

        const post = {
            commentValue: comment
        }
        
        setComment('');
        refreshCommentList(post);
    }

    //console.log(commentList,'check:')
    return (
        <>
            <div>
                {commentList.map((comment, index) => (
                    !comment.replyTo ? (
                        <>
                            <SingleComment {...comment} refreshCommentList={refreshCommentList}/>
                            <ReplyComment commentList={commentList} parentCommentId={comment.postIndex} refreshCommentList={refreshCommentList}/>
                            <hr/>
                        </>
                    ) : ''
                ))}
            </div>
            <form onSubmit={submitHandler} style={{display:'flex'}}>
                <textarea placeholder='write a post...' onChange={e => setComment(e.target.value)}></textarea>
                <button type='submit'>POST</button>
            </form>
            <hr/>
        </>
       
    );
}

export default Comments;

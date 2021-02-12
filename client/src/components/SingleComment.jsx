import React from 'react';
import { useState } from 'react';

const SingleComment = ({commentValue, postIndex, refreshCommentList}) => {
    console.log('check:',postIndex)
    const [showForm, setShowForm] = useState(false);
    const [comment, setComment] = useState('');

    const submitHandler = e => {

        e.preventDefault();

        const post = {
            commentValue: comment,
            replyTo: postIndex
        }
        
        //setComment('');
        setShowForm(!showForm);
        refreshCommentList(post);
    }

    return (
        <div style={{marginLeft:'20px'}}>
            <div style={{display:'flex'}}>
                <h2 style={{width:'350px'}}>{commentValue}</h2>
                <button onClick={() => setShowForm(!showForm)}>Reply</button>
            </div>
            {showForm && (
                <form onSubmit={submitHandler} style={{display:'flex'}}>
                    <textarea placeholder='post a comment...' onChange={e => setComment(e.target.value)}></textarea>
                    <button type='submit'>POST</button>
                </form>
            )}
        </div>
        
    );
}

export default SingleComment;

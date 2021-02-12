import React, { useState } from 'react';

const RecursiveComponent = ({content, postId}) => {

    const [showForm, setShowForm] = useState(false);

    const submitHandler = (e, postId) => {
        e.preventDefault();
        console.log(postId,'checkpostID')
    }

    return (
        <div style={{marginBottom:'20px'}}>
            <div style={{display:'flex', marginBottom:'10px'}}>
                <div style={{width:'75vw', backgroundColor:'red'}}>
                    {content}
                </div>
                <button onClick={() => setShowForm(!showForm)}>Reply</button>
            </div>
           {showForm && (
                <form onSubmit={(e) => submitHandler(e, postId)} style={{display:'flex', width:'50vw', backgroundColor:'pink'}}>
                    <textarea></textarea>
                    <button type='submit'>post reply</button>
                </form> 
           )}
        </div>
    );
}

export default RecursiveComponent;

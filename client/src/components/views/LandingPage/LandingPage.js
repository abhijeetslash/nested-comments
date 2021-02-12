import React, { useState } from 'react'
import { FaCode } from "react-icons/fa";
import Comments from '../../Comments';
import Video from '../../Video';

let postIndex = 1;

function LandingPage() {

    const [commentList, setCommentList] = useState([]);

    const refreshCommentList = (post) => {
        setCommentList([...commentList, {...post, postIndex}]);
        ++postIndex;
    }

    return (
        <>
            <div >
                {/* <FaCode style={{ fontSize: '4rem' }} /><br />
                <span style={{ fontSize: '2rem' }}>Let's Start Coding!</span> */}
                <Video refreshCommentList={refreshCommentList} />
                <Comments commentList={commentList} refreshCommentList={refreshCommentList} />
            </div>
            {/* <div style={{ float: 'right' }}>Thanks For Using This Boiler Plate by John Ahn</div> */}
        </>
    )
}

export default LandingPage

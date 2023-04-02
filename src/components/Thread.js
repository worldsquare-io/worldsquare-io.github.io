import Post from "./Post";
import Comment from "./Comment";
import React from 'react';
import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { postComment } from "../helpers/Api";

function Thread({ parentItem, childItems }) {
    let title = parentItem.message;
    let variant = parentItem.variant;
    const [text, setText] = useState("");

    function handleInputMessage(e) {
        e.preventDefault();
        postComment(parentItem._id, text);
        setText("");
    }

    return (
        <React.Fragment>
            {/* This is where the post and comments are displayed. */}
            <div className="post-comment-container">
                <Post title={title} variant={variant} />
                <div className="comment-container">
                    {childItems.map((item) => <Comment key={item._id} message={item.message} timestamp={item.timestamp} />)}
                </div>
            </div>

            {/* This is where the user can input a comment. */}
            <form className="comment-input-container" onSubmit={handleInputMessage}>
                <label>
                    <input
                        type="text"
                        name="comment"
                        value={text}
                        placeholder="comment here..."
                        className="comment-input"
                        onChange={e => setText(e.target.value)}
                    />
                </label>
                <RiSendPlaneFill className="send-button" onClick={handleInputMessage} />
            </form>
        </React.Fragment>
    );
}

export default Thread;

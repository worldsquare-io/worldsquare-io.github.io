import Post from "./Post";
import Comment from "./Comment";
import React from 'react';
import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { postComment } from "../helpers/Api";
import { Container, Form, ListGroup } from "react-bootstrap";

function Thread({ parentItem, childItems, onRequestRefresh }) {
    let title = parentItem.message;
    let variant = parentItem.variant;
    const [text, setText] = useState("");

    function handleInputMessage(e) {
        e.preventDefault();

        postComment(parentItem._id, text)
            .then(() => onRequestRefresh())
            .catch((err) => console.err("Failed to post comment:", err));

        setText("");
    }

    return (
        // <div className="thread-container">
        <Container className="ThreadContainer">
            {/* This is where the post and comments are displayed. */}
            {/* <div className="post-comment-container"> */}
            <Container className="PostCommentContainer">
                <Post title={title} variant={variant} />
                <div className="comment-container">
                    {childItems.map((item) =>
                        <Comment
                            key={item._id}
                            message={item.message}
                            timestamp={item.timestamp}
                        />)}
                </div>
            </Container>
            {/* </div> */}

            {/* This is where the user can input a comment. */}
            {/* <form className="comment-input-container" onSubmit={handleInputMessage}> */}
            <Form className="CommentInputContainer" onSubmit={handleInputMessage}>
                {/* <label>
                    <input
                        type="text"
                        name="comment"
                        value={text}
                        placeholder="Enter a comment"
                        className="comment-input"
                        onChange={e => setText(e.target.value)}
                    />
                </label> */}
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Make a comment"
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                </Form.Group>
                {/* <RiSendPlaneFill className="send-button" onClick={handleInputMessage} /> */}
            </Form>
            {/* </form> */}
        </Container>
        // </div>
    );
}

export default Thread;

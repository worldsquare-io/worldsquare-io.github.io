import Post from "./Post";
import Comment from "./Comment";
import { useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";

function Thread({ parentItem, childItems }) {
    let title = parentItem.message;
    let variant = parentItem.variant;
    const [text, setText] = useState("");

    function handleInputMessage(e) {
        console.log("hiihihihi");
        setText("");
    }

    return (
        <div className="thread-container">
            {/* This is where the post and comments are displayed. */}
            <div className="post-comment-container">
                <Post title={title} variant={variant} />
                <div className="comment-container">
                    {childItems.map((item) => (
                        <div key={item._id}>
                            <Comment message={item.message} timestamp={item.timestamp} />
                        </div>
                    ))}
                </div>
            </div>

            {/* This is where the user can input a comment. */}
            <form className="comment-input-container">
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
        </div>
    );
}

export default Thread;

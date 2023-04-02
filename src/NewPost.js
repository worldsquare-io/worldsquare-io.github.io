import { IoMdCreate } from "react-icons/io";
import { useState } from "react";
function NewPost() {

    const [inputText, setInputText] = useState("");

    function handleInputMessage(e) {
        e.preventDefault();
        if (inputText.trim() === "") {
            console.log("Empty Input!");
            return;
        }
        setInputText("");
        fetch("https://api.worldsquare.io/items/", {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
                timestamp: String(Date.now() / 1000),
                location: [35.703239546, -25.23160611],
                message: String(inputText),
                variant: "remote",
            }),
        })
            .then(response => response.json())
            .then(response => {
                console.log(JSON.stringify(response));
            });
    }

    return (
        <div className="new-post-container">
            <div className="input-container">
                <input
                    type="text"
                    name="new-post"
                    value={inputText}
                    placeholder="New post.."
                    className="new-post-input"
                    onChange={e => setInputText(e.target.value)}
                />
            </div>
            <div className="local-remote-buttons">
                <button className="button">Local</button>
                <button className="button">Remote</button>
            </div>
            <IoMdCreate
                className="create-post-button"
                onClick={handleInputMessage}
            />
        </div>
    );
}

export default NewPost;

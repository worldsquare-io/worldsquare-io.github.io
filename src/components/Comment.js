function Comment({ message, timestamp }) {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const formattedTime = month + "/" + day + "/" + year + " " + hours + ':' + minutes.substr(-2);

    return (
        <div>
            <div className="post" id="comment">
                <div className="message-container">
                    <div className="color-region"></div>
                    <p>{message}</p>
                </div>
                <div className="timestamp-container">
                    {formattedTime}
                </div>
            </div>
        </div>
    );
};

export default Comment;

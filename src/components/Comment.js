function Comment({ message, timestamp }) {

    const date = new Date(timestamp.$date * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();

    const formattedTime = hours + ':' + minutes.substr(-2);

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
}

export default Comment;

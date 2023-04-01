function Comment({ message, timestamp }) {
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
let date = new Date(timestamp * 1000);
// Hours part from the timestamp
let hours = date.getHours();
// Minutes part from the timestamp
let minutes = "0" + date.getMinutes();
// Seconds part from the timestamp

// Will display time in 10:30:23 format
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

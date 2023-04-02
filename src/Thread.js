import Post from "./Post";
import Comment from "./Comment";
import { nanoid } from "nanoid";
import { RiSendPlaneFill } from "react-icons/ri";
import { useEffect, useState } from "react";

function Thread({ threadID }) {
	const sampleTitle = "It’s real! Four types of Twitter user  according.";
	const sampleVariant = "Local";
	const temp = [
		{
			id: nanoid(),
			message: "You forgot native defaults. You're Null",
			time: 1680383521,
		},
		{
			id: nanoid(),
			message: "I'm sorry for you",
			time: 1234,
		},
		{
			id: nanoid(),
			message:
				"I ain't a Republican. I ain't a Democrat. According to r/linuxmasterrace I ain't a power user. Guys... I might be Elon Musk",
			time: 1234,
		},
		{
			id: nanoid(),
			message:
				"I ain't a Republican. I ain't a Democrat. According to r/linuxmasterrace I ain't a power user. Guys... I might be Elon Musk",
			time: 1234,
		},
		{
			id: nanoid(),
			message:
				"I ain't a Republican. I ain't a Democrat. According to r/linuxmasterrace I ain't a power user. Guys... I might be Elon Musk",
			time: 1234,
		},
		{
			id: nanoid(),
			message:
				"I ain't a Republican. I ain't a Democrat. According to r/linuxmasterrace I ain't a power user. Guys... I might be Elon Musk",
			time: 1234,
		},
		{
			id: nanoid(),
			message:
				"I ain't a Republican. I ain't a Democrat. According to r/linuxmasterrace I ain't a power user. Guys... I might be Elon Musk",
			time: 1234,
		},
	];
	const [commentList, setCommentList] = useState([]);
	// fetch("api.worldsquare.io/items/")
	// 	.then(response => response.json())
	// 	.then(data => console.log(data));

	const [text, setText] = useState("");

	function handleInputMessage(e) {
		console.log("hiihihihi");
		setText("");
	}

	useEffect(() => {
		getItemsFromAPI();
	}, []);

	function getItemsFromAPI() {
		return fetch("https://api.worldsquare.io/items/")
			.then(response => response.json())
			.then(data => {
        console.log(data[0],data[1],data[2])
				setCommentList(data);
			});
	}

	return (
		<div className="thread-container">
			<div className="post-comment-container">
				<Post title={sampleTitle} variant={sampleVariant} />
				<div className="comment-container">
					{commentList.map((item, index) => (
						<div key={item._id}>
							<Comment message={item.message} timestamp={item.timestamp} />
						</div>
					))}
				</div>
			</div>

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

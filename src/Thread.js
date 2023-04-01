import Post from "./Post";
import Comment from "./Comment";
import Input from "@mui/material/Input";
// import TextField from "@mui/material/Textfield";
import { nanoid } from "nanoid";
import {RiSendPlaneFill} from "react-icons/ri";

function Thread() {
	const commentList = [
		{
			id: nanoid(),
			message: "You forgot native defaults. You're Null",
		},
		{
			id: nanoid(),
			message: "I'm sorry for you",
		},
		{
			id: nanoid(),
			message:
				"I ain't a Republican. I ain't a Democrat. According to r/linuxmasterrace I ain't a power user. Guys... I might be Elon Musk",
		},
    {
			id: nanoid(),
			message:
				"I ain't a Republican. I ain't a Democrat. According to r/linuxmasterrace I ain't a power user. Guys... I might be Elon Musk",
		},
	];
	return (
		<div>
			<header>
				<Post />
				<div>
					{commentList.map((item, index) => (
						<div key={item.id}>
							<Comment message={item.message} comment={item} />
						</div>
					))}
				</div>
				{/* <Input placeholder="comment here..." /> */}

				<form className="comment-input-container">
					<label>
						<input
							type="text"
							name="name"
							placeholder="comment here..."
							className="comment-input"
						/>
					</label>
          <RiSendPlaneFill className="send-button"/>
				</form>
			</header>
		</div>
	);
}

export default Thread;

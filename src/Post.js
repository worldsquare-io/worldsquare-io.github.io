function Post({ title, variant }) {
	return (
		<div>
			<p className="post">
				{title}
				<div>
					<span className="variant">{variant}</span>
				</div>
			</p>
		</div>
	);
}

export default Post;

import "./App.css";
import Map from "./Map";
import Thread from "./Thread";
import { BsFillFilterCircleFill } from "react-icons/bs";

function App() {
	const threadID = "abc";

	return (
		<div className="App">
				<BsFillFilterCircleFill className="filter-icon" />
        
			<div className="Map">
				<Map />
			</div>
			{/* <div className="icon-thread-container"> */}
				<div className="Thread">
					<Thread threadID={threadID} />
				{/* </div> */}
			</div>
		</div>
	);
}

export default App;

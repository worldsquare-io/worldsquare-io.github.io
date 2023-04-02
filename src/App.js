import "./App.css";
import Map from "./Map";
import Thread from "./Thread";
import { BsFillFilterCircleFill } from "react-icons/bs";

function App() {
	const threadID = "m4hj1CeDVKDEwef6FkOHr";

	return (
		<div className="App">
			<BsFillFilterCircleFill className="filter-icon" />

			<div className="Map">
				<Map />
			</div>
			<div>
				<Thread threadID={threadID} />
			</div>
		</div>
	);
}

export default App;

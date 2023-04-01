import "./App.css";
import Map from "./Map";
import Thread from "./Thread";

function App() {
  const threadID = "abc";

	return (
		<div className="App">
			<div className="Map">
				<Map />
			</div>
			<div className="Thread">
			<Thread threadID={threadID}/>
			</div>
		</div>
	);
}

export default App;

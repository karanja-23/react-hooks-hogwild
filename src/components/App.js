import React from "react";
import Nav from "./Nav";
import DisplayHogs from "./HogTiles";
import "../index.css";


//import hogs from "../porkers_data";

function App() {
	return (
		<div className="App" style={{position: "relative"}}>
			<Nav />
			
			<DisplayHogs/>
		</div>
	);
}

export default App;

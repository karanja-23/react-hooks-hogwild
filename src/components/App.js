import React from "react";
import Nav from "./Nav";
import DisplayHogs from "./HogTiles";
import "../index.css";
import Form from "./form";

//import hogs from "../porkers_data";

function App() {
	return (
		<div className="App" style={{position: "relative"}}>
			<Nav />
			<Form />			
			<DisplayHogs/>
		</div>
	);
}

export default App;

import hogs from "../porkers_data";
import { useState } from "react";
function HogDescription({speciality, weight, greased, medal, color}){
    return(
        <>
        <div className="meta">
            <span style={{float: "left", padding: "5px", fontWeight: "900", color: `${color}` }} className="date">{medal}</span>

        </div>
        <div className="description">
            <strong>Specialty:</strong> {speciality}
        </div><hr style={{height: "2px", color: "black"}}/>
        <div className="extra content">
            <span className="right floated">
                <strong>Weight:</strong> {weight.toFixed(1)}
            </span>
            <span className="left floated">
                {greased? "Greased" : "Not Greased"}
            </span>
        </div>
        </>
    )
}
function DisplayHogs (){
   const [filter, setFilter] = useState("all")
   const [description, setDescription] = useState(null)
   const [mode, setMode] = useState("Light Mode")
   const [sortHogs, setSortHogs] = useState([...hogs])
   const [display, setDisplay] = useState(hogs.map(() => true));
   function handleHide(event) {
    const index = event.target.parentNode.dataset.index;
    setDisplay(prevState => prevState.map((visible, i) => i === parseInt(index) ? !visible : visible));
  }
   function handleSort(event) {
    setSortHogs([...sortHogs].sort((a, b) => a.name.localeCompare(b.name)));
  }
   function handleMode(){
    setMode(()=> (mode === "Light Mode" ? "Dark Mode" : "Light Mode") )
    document.body.style.backgroundColor = mode === "Light Mode" ? "black" : "white";

   }

function handleFilter(event) {
  const filterValue = event.target.value;
  const filteredHogs = hogs.filter((hog) => {
    if (filterValue === "all") return true;
    return hog.greased === (filterValue === "greased");
  });
  setSortHogs(filteredHogs);
  setFilter(filterValue);
}
   function showDescription(index) {
    setDescription(description ===index ? null : index)
   
   }
   let bgColor = mode === "Light Mode" ? "white" : "black";
   let color = mode === "Light Mode" ? "black" : "white";
   let modeText = mode === "Light Mode" ? "Dark Mode" : "Light Mode";
    return(
        <>
            <>
            <select onChange={handleFilter} style={{fontWeight: "bold", padding: "3px", border: `1px solid ${color}`, margin: "10px", float: "left", backgroundColor: `${bgColor}`, color: `${color}`}}>
             <option value="all">Filter Greased Pigs</option>
             <option value="greased">Greased</option>
             <option value="not greased">Not greased</option>
            </select>  
            <button onClick={handleSort} style={{ fontWeight: "bold", border: "none", margin: "10px", float: "left", backgroundColor: `${color}`, color: `${bgColor}`,padding: "6px"}}>Sort  A-Z</button> 
            <button onClick={handleMode} style={{fontWeight: "bold", border: "none",margin: "10px", float: "right",backgroundColor: `${color}`, color: `${bgColor}`, padding: "6px"}}>{modeText}</button>     
             
            </>
            <div className="ui link cards" style={{marginTop: "70px",backgroundColor: `${bgColor}`, color: `${color}` }}>
            
            {sortHogs.filter((hog) => {
                  if (filter === "all") return true;
                  return hog.greased === (filter === "greased");
            }).map( (hog, index) => {              
                return (  

                    <div  style={{display: [display[index] ? "block" : "none"], backgroundColor: `${bgColor}`, color: `${color}`}} className="card" key={hog.name} data-index={index}>
                        <button onClick={handleHide} className="close">Hide</button>
                        <div className="image">
                          <img className="the-image" style={{   width: "100%", height: "250px"}} src={hog.image} alt={hog.name}/>
                        </div>
                        <div className="content">
                            <div onClick={() => showDescription(index)} style={{padding: "6px", border: `2px solid  ${color}`, color: `${color}`}} className="header">{hog.name}</div>
                            {description===index ? <HogDescription speciality={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog["highest medal achieved"]} color={color}/> : null}

                        </div>
                        
                    </div>
                )
            })}
        </div>    
        </>

    )

}
export default DisplayHogs
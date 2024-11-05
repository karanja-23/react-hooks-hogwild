import React, { useState, useEffect } from 'react';
import { hogs, addHog} from '../porkers_data';

function Form() {
    const [name, setName] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [weight, setWeight] = useState("");
    const [medal, setMedal] = useState("");
    const [image, setImage] = useState ("");
    const [greased, setGreased] = useState(false);
    const [hogsState, setHogsState] = useState(hogs);

    function setMyName(event) {
        setName(event.target.value);
        
    }
    function setMySpecialty (event){
        setSpecialty(event.target.value)
        
    }
    function setMyWeight (event){
        setWeight(event.target.value)
    }
    function setMyMedal (event){
        setMedal(event.target.value)
    }
    function setMyImage (event){
        setImage(event.target.value)
    }
    function checkGreased(event){
        setGreased(()=>!greased)
        
    }
    function handleSubmit(event) {
        event.preventDefault();
        const newHog = {
          name: name,
          specialty: specialty,
          greased: greased,
          weight: weight,
          "highest medal achieved": medal,
          image: image,
        };
        addHog(newHog);
        event.target.reset();
      }
      useEffect(() => {
        setHogsState(hogs);
      }, [hogs]);
    return (
        <form onSubmit={handleSubmit}>
            <h3>Add Hog</h3>
            <input onChange={setMyName} type="text" placeholder='name' value={name} />
            <input onChange={setMySpecialty} type="text" placeholder="Specialty" value={specialty}/>
            <input onChange={setMyWeight} type="text" placeholder="Weight" value={weight}/>
            <input onChange={setMyMedal} type="text" placeholder="Highest Medal Achieved" value={medal} />
            <input onChange={setMyImage} type="text" placeholder="Image URL" value={image}/>
            <div id='radio'>
               <div className='greased'> 
                <input onChange={checkGreased} type="radio" id="greased" name="grease_status" checked={greased} value='greased'/>
                <label for="greased">Greased</label>
              </div>
               <div className='greased'>
               <input onChange={checkGreased} type="radio" id="not_greased" name="grease_status" checked={!greased} value="not_greased"/>
               <label for="not_greased">Not Greased</label>         
                </div>         
            </div>                  

            <input type="submit" value="Add" />
        </form>
    );
}

export default Form;

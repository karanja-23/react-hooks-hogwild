import React, { useState, useEffect } from 'react';

function Form() {
    const [name, setName] = useState("");
    function setMyName(event) {
        setName(event.target.value);
        
    }
    useEffect(() => {
        console.log(name);
    }, [name]);
    return (
        <form>
            <h3>Add Hog</h3>
            <input onChange={setMyName} type="text" placeholder='name' value={name} />
            <input type="text" placeholder="Specialty" />
            <input type="text" placeholder="Weight" />
            <input type="text" placeholder="Image URL" />
            <label>Greased</label>
            <input type="checkbox" name="greased" value="true" />           

            <input type="submit" value="Add" />
        </form>
    );
}

export default Form;

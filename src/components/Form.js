import React, {useState} from "react";
import './Form.css';


function Form () {

    const [title, setTitle] = useState('')


    function cz () {
        const czesc = document.getElementById('czesc')
        czesc.style.display = 'block'
    }


    return (
        <div className="form container">
            <label for="name">Imie (2 do 16 znaków):</label>
            <input type="text" placeholder="Imie" id="name" name="name" required
            minlength="2" maxlength="16" size="14" onChange={event => setTitle(event.target.value)} ></input>
            <button className="submit" onClick={cz}>OK</button>
            <div id="czesc" className="czesc">Cześć, {title}</div>
       </div>
    ) 
}

export default Form
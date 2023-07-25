import React,{useState} from 'react'
import './Form.css';

function Form({initialText,onUpdate}) {

    const [text, setText] = useState(initialText);

    const handleInputChange = (e) => {
      setText(e.target.value);
    };

    
    const handleUpdate = (e) => {
        e.preventDefault();
        onUpdate(text);
      };

    return (
      <form className="form-container">
        <label htmlFor="name" className="form-label">
          <input type="text" id="name" className="form-input" value={text} onChange={handleInputChange}/>
        </label>
        <button type="submit" className="btn" onClick={handleUpdate}>Update</button>
      </form>
    );
  }


export default Form;
